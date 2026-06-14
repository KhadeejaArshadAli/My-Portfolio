import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'

const KARACHI_COORDS = [24.9265, 67.0822]
const WHATSAPP_NUMBER = '923402602221'
const EMAIL = 'khadijaarshad435@gmail.com'
const PHONE = '+923402602221'

const EMAILJS_SERVICE_ID = 'service_68jtihs'
const EMAILJS_TEMPLATE_ID = 'template_lvih7mp'
const EMAILJS_PUBLIC_KEY = 'i0eiH5wu7vnnCg41W'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [formStatus, setFormStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const form = useRef()

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)

    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setFormStatus('sending')
    setErrorMessage('')

    const formData = new FormData(form.current)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const projectType = formData.get('project_type')
    const message = formData.get('message')

    const templateParams = {
      name,
      email: String(email).toLowerCase(),
      subject: projectType ? `[${projectType}] ${subject}` : subject,
      message: projectType
        ? `Project type: ${projectType}\n\n${message}`
        : message,
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(
        () => {
          setFormStatus('success')
          form.current.reset()
        },
        (err) => {
          console.error('EmailJS error:', err)
          setFormStatus('error')

          const detail = err?.text || err?.message || ''
          if (detail.toLowerCase().includes('gmail') || err?.status === 412) {
            setErrorMessage(
              'Email service needs reconnecting in your EmailJS dashboard (Gmail → Disconnect → Connect again). You can also email me directly.'
            )
          } else {
            setErrorMessage(
              'Something went wrong. Please try again or email me directly.'
            )
          }
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className="availability">
            Currently accepting new React Native projects.
          </p>
          <p>
            I am interested in freelance opportunities — especially ambitious
            mobile apps, subscription platforms, and white-label products.
            Reach out via the form below, email, phone, or WhatsApp.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <select name="project_type" required defaultValue="">
                    <option value="" disabled>
                      Project type
                    </option>
                    <option value="New app">New app</option>
                    <option value="Feature work">Feature work</option>
                    <option value="Store submission">Store submission</option>
                    <option value="Other">Other</option>
                  </select>
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value={formStatus === 'sending' ? 'SENDING...' : 'SEND'}
                    disabled={formStatus === 'sending'}
                  />
                </li>
                {formStatus === 'success' && (
                  <li className="form-feedback form-feedback-success">
                    Message sent successfully. I will get back to you soon.
                  </li>
                )}
                {formStatus === 'error' && (
                  <li className="form-feedback form-feedback-error">
                    {errorMessage || 'Failed to send. Please try again or email me directly.'}
                    {' '}
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </li>
                )}
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Khadeeja Arshad Ali
          <br />
          Karachi, Pakistan
          <br />
          Gulshan-e-Iqbal, 74100
          <br />
          <br />
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <br />
          <a href={`tel:${PHONE}`}>{PHONE}</a>
          <br />
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-link"
          >
            WhatsApp
          </a>
        </div>
        <div className="map-wrap">
          <MapContainer center={KARACHI_COORDS} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={KARACHI_COORDS}>
              <Popup>
                Khadeeja Arshad Ali — React Native Developer, Karachi, Pakistan
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
