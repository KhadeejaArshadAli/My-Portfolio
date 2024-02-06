import './index.scss'
import LogoS from '../../../assets/images/LogoK.png'



import Loader from 'react-loaders'

const Logo = () => {
  return (
    
    <>
       <div className="logo-container" >
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      />

     
    
    </div>
    <Loader type='pacman'/>
    </>
  
  )
}

export default Logo
