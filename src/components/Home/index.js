import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import TechCube from '../TechCube'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', ' ', 'K', 'h', 'a', 'd', 'e', 'e', 'j', 'a']
  const jobArray = [
    'R',
    'e',
    'a',
    'c',
    't',
    ' ',
    'N',
    'a',
    't',
    'i',
    'v',
    'e',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={24}
            />
          </h1>
          <h2>
            I build production mobile apps — subscriptions, payments, and App
            Store launches — for startups and agencies.
          </h2>
          <div className="cta-group">
            <Link to="/contact" className="flat-button">
              HIRE ME
            </Link>
            <Link to="/portfolio" className="flat-button flat-button-secondary">
              VIEW MY WORK
            </Link>
            <a
              href={`${process.env.PUBLIC_URL}/KhadeejaArshadAli.pdf`}
              className="flat-button flat-button-cv"
              download="KhadeejaArshadAli.pdf"
              target="_blank"
              rel="noreferrer"
            >
              DOWNLOAD CV
            </a>
          </div>
          <p className="trust-strip">
            Expo · Stripe · RevenueCat · App Store &amp; Play Store
          </p>
        </div>
        <TechCube />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
