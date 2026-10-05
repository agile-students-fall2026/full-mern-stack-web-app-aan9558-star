import { useEffect, useState } from 'react'
import './AboutUs.css'

const AboutUs = () => {
  const [about, setAbout] = useState(null)

  useEffect(() => {
      fetch(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
        .then(response => response.json())
        .then(data => {
          setAbout(data)
        })
        .catch(error => {
          console.error('Error:', error)
        })
    }, [])

  if (!about) {
    return <p>Loading...</p>
  }

  return (
    <div className="about-us">
      <h1>About Us</h1>

      <img
        src={about.imageUrl}
        alt={`Photo of ${about.name}`}
      />

      <h2>{about.name}</h2>

      {about.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

export default AboutUs