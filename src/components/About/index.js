import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import skills from '../../data/skills'
import experience from '../../data/experience'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'About me'.split('')}
            idx={15}
          />
        </h1>

        <p className="about-intro">
          React Native developer specializing in production mobile apps — Stripe
          payments, RevenueCat subscriptions, and App Store launches. Based in
          Karachi, available for freelance and remote projects worldwide.
        </p>

        <section className="skills-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="experience-section">
          <h2>Experience</h2>
          <div className="experience-timeline">
            {experience.map((job) => (
              <div className="experience-item" key={job.id}>
                <div className="experience-header">
                  <h3>{job.role}</h3>
                  <span className="experience-period">{job.period}</span>
                </div>
                <p className="experience-company">{job.company}</p>
                <ul>
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
