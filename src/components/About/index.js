import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faJsSquare, faGitAlt, faPhp } from '@fortawesome/free-brands-svg-icons'

const About = () => {


    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);


        return () => clearTimeout(timeoutId);
    }, []);


    return (
        <>
          <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                     letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15} />

                </h1>
                <p>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p align="LEFT">
                    I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family
                    person, bookworm and tech-obsessed!!!
                </p>
            </div>
            <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className='face1'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faPhp} color="#4F5D95"/>
                </div>
                
            </div>

            


        </div>
        </div>
        <Loader type="pacman" />
      

        </>
      
      
    )
}

export default About