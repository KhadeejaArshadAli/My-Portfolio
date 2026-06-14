import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import services, { processSteps } from '../../data/services'

const Services = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container services-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Services'.split('')}
            idx={15}
          />
        </h1>
        <p className="services-intro">
          Specialized React Native development for startups, agencies, and
          product teams. Here is how I can help you ship faster.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul>
                {service.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <Link to="/contact" className="service-cta">
                Get a Quote
              </Link>
            </div>
          ))}
        </div>

        <div className="process-section">
          <h2>How I Work</h2>
          <div className="process-steps">
            {processSteps.map((item) => (
              <div className="process-step" key={item.step}>
                <span className="step-number">{item.step}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <p className="timezone-note">
            Based in Karachi (PKT) — available for async collaboration and
            scheduled video calls.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Services
