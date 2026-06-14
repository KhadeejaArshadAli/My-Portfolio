import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faGitAlt,
  faAndroid,
  faAppStoreIos,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const TechCube = () => (
  <div className="stage-cube-cont">
    <div className="cubespinner">
      <div className="face1">
        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
      </div>
      <div className="face2">
        <span className="ts-icon">TS</span>
      </div>
      <div className="face3">
        <FontAwesomeIcon icon={faAppStoreIos} color="#007AFF" />
      </div>
      <div className="face4">
        <FontAwesomeIcon icon={faAndroid} color="#3DDC84" />
      </div>
      <div className="face5">
        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
      </div>
      <div className="face6">
        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
      </div>
    </div>
  </div>
)

export default TechCube
