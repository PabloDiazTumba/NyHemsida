import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000);

    return () => clearTimeout(timeoutId);
}, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['O', 'm', ' ', 'm', 'i', 'g']}
              idx={15}
            />
          </h1>
          <p>
          Hej där,
          Jag heter Pablo Diaz Aros och jag är 38 år gammal. Jag skriver för att dela med mig av min
          passion för både kreativitet och problemlösning och för att utforska möjligheterna inom IToch webbutveckling.
          </p>
          <p align="LEFT">
          Från en tidig ålder har jag älskat att sitta ner och skapa, från att rita små figurer som barn till
          att nu arbeta med teknik och lösningar. Jag trivs både med träning och med att utforska
          världen framför datorn. Min styrka ligger i min förmåga att tänka utanför boxen för att hitta
          nya och innovativa lösningar på olika utmaningar.
          </p>
          <p>
          Jag ser fram emot möjligheten att tillämpa mina färdigheter och erfarenheter i en ny och
          utmanande miljö. Att vara en del av ett team där kreativitet och innovation uppmuntras är
          något jag ser fram emot med stor entusiasm.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About