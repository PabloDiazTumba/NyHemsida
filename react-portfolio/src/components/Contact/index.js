import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000);

    return () => clearTimeout(timeoutId);
}, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_k6azyp8', form.current, 'Ll1TIgvwTKTMSvkY7')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['K', 'o', 'n', 't', 'a', 'k', 't', 'a', ' ', 'm', 'i', 'g']}
              idx={15}
            />
          </h1>
          <p>
          Söker du en engagerad och målinriktad praktikant eller medarbetare? 
          Jag är här för att bidra till ditt team! Låt oss skapa möjligheter tillsammans. 
          Kontakta mig nedan för att diskutera hur jag kan vara en tillgång för ditt företag
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Pablo Diaz
          <br />
          Sverige,
          <br />
          Stockholm <br />
          Tumba <br />
          <br />
          <span>pablodiaz147@gmail.come</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[59.19858000, 17.83317000]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[59.19858000, 17.83317000]}>
              <Popup>Jag bor här och är tillgänglig över hela stockholm :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact