import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/sidebar.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClose,
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
  faCogs,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const navLinkClass = ({ isActive }) => (isActive ? 'active' : undefined)

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink end className={navLinkClass} onClick={() => setShowNav(false)} to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'about-link active' : 'about-link'
          }
          onClick={() => setShowNav(false)}
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'services-link active' : 'services-link'
          }
          onClick={() => setShowNav(false)}
          to="/services"
        >
          <FontAwesomeIcon icon={faCogs} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'portfolio-link active' : 'portfolio-link'
          }
          onClick={() => setShowNav(false)}
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'contact-link active' : 'contact-link'
          }
          onClick={() => setShowNav(false)}
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/khadija-arshad-ali-web/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KhadeejaArshadAli"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
