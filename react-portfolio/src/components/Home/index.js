import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['P', 'a', 'b', 'l', 'o']
  const jobArray = [
    'w',
    'e',
    'b',
    'b',
    '-',
    'U',
    't',
    'v',
    'e',
    'c',
    'k',
    'l',
    'a',
    'r',
    'e',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000);

    return () => clearTimeout(timeoutId);
}, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="Java developer, react developer. Pablo Diaz"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Back-end developer, Pablo Diaz </h2>
          <Link to="/contact" className="flat-button">
            Kontakta mig
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home