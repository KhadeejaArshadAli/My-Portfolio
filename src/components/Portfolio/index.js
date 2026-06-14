import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import projects from '../../data/projects'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const hasStoreLink = (project) =>
    !project.nda &&
    (project.storeLinks.appStore || project.storeLinks.playStore)

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'My Work'.split('')}
            idx={15}
          />
        </h1>
        <p className="portfolio-intro">
          Production React Native apps — marketplaces, subscriptions, and
          secure document platforms.
        </p>

        <div className="case-studies">
          {projects.map((project) => (
            <article className="case-study-card" key={project.id}>
              <div className="case-study-header">
                <h3>{project.name}</h3>
                {project.nda && (
                  <span className="nda-badge">Confidential</span>
                )}
              </div>
              <p className="case-study-tagline">{project.tagline}</p>
              <ul className="case-study-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tech-tags">
                {project.tech.map((tag) => (
                  <span className="tech-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="store-links">
                {hasStoreLink(project) ? (
                  <>
                    {project.storeLinks.appStore && (
                      <a
                        href={project.storeLinks.appStore}
                        target="_blank"
                        rel="noreferrer"
                        className="store-badge"
                      >
                        App Store
                      </a>
                    )}
                    {project.storeLinks.playStore && (
                      <a
                        href={project.storeLinks.playStore}
                        target="_blank"
                        rel="noreferrer"
                        className="store-badge"
                      >
                        Google Play
                      </a>
                    )}
                  </>
                ) : (
                  <Link to="/contact" className="store-badge store-badge-request">
                    {project.nda ? 'Details on request' : 'Request store links'}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
