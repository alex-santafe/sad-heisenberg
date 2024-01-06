// Navigation buenaaaa

import React, { useState, useEffect } from "react"
import { animated } from "react-spring"
import { window, document } from "browser-monads"
import "../components/caja.css"
//social
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faWeixin,
  faSquareWhatsapp,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons"

//import { useWiggle } from "../hooks/wiggle";
//import { Link } from "wouter";
import { Link } from "gatsby"
import "../components/hairstyle.scss"

const samplePageLinks = [
  {
    text: "Illustration",
    url: "",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "About",
    url: "about",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "Contact",
    url: "using-ssr",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
]
/*
faLinkedin,
  faWeixin,
  faSquareWhatsapp,
  faEnvelope,
  faSquareInstagram,
  */
const socialLinks = [
  {
    text: "Email",
    url: "mailto:alexsantafe@gmail.com",
    description: "faLinkedin",
  },
  {
    text: "Linked In",
    url: "https://www.linkedin.com/in/alexsantafe/",
    description: "faLinkedin",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/alexsantafe/",
    description: "faSquareInstagram",
  },
  {
    text: "Whatsapp",
    url: "https://www.instagram.com/alexsantafe/",
    description: "fas faSquareWhatsapp",
  },
]
//({ siteTitle })
function MovingHead({ siteTitle }) {
  //function MovingHead() {
  useEffect(() => {
    // Set up event listener for scroll events
    window.addEventListener("scroll", handleScroll)

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []) // Empty dependency array ensures that the effect only runs once

  function handleScroll() {
    // Get the current scroll position
    //////const scrollPos = window.pageYOffset
    // Update the value of your variable here
    // e.g. setVariableValue(scrollPos);
  }
  //const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
    //console.log("navbarOpen")
    setNavbarOpen(prev => !prev)
    //window.location.href = "mailto:alexsantafe@gmail.com"
    //window.open("mailto:alexsantafe@gmail.com", "_blank")
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  const strings = ["Hello", "Hola", "你好", "Salut"]

  // Utility function to choose a random value from the language array
  function randomLanguage() {
    return strings[Math.floor(Math.random() * strings.length)]
  }

  const [hello, setHello] = React.useState(strings[0])

  // When the user clicks we change the header language
  const handleChangeHello = () => {
    // Choose a new Hello from our languages
    const newHello = randomLanguage() + " - Alex Santafe"
    // Call the function to set the state string in our component
    setHello(newHello)
    //document.title = newHello;
  }
  setTimeout(() => handleChangeHello(), 1000)
  //const [hasWiggled, setHasWiggled] = useState(false)
  //const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 })
  const [isHovering, setIsHovering] = useState(false)

  const toggleAnimation = () => {
    setIsHovering(!isHovering)
  }
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleScroll() {
      setScrollPosition({ x: window.scrollX, y: window.scrollY })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  /*
  const windowX = window.clientWidth;
  const windowY = window.clientHeight;
  const x = scrollPosition.x / (windowX - window.innerWidth);
  const y = scrollPosition.y / (windowY - window.innerHeight);
  */
  /*
const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
*/
  const x = scrollPosition.x / (document.body.clientWidth - window.innerWidth)
  const y = scrollPosition.y / (document.body.clientHeight - window.innerHeight)

  const styles = {
    animation: `x 7s linear infinite alternate, y 3s linear infinite alternate`,
    transform: `translateX(${x}%) translateY(${y}%)`,
  }

  return (
    <>
      <div
        className={`menu-nav${navbarOpen ? " show-menu" : ""}`}
        styles={{
          //background: `var(--color-primary)`,
          width: `100%`,
          height: `100%`,
          margin: `2rem`,
          display: `flex`,
        }}
      >
        <div
          style={{
            margin: "2rem",
            display: "flex",
            flexDirection: `column`,
            justifyContent: `space-between`,
            minHeight: "calc(100% - 2rem)",
          }}
        >
          <span
            style={{
              //fontSize: `var(--font-sm)`,
              fontSize: `2rem`,
              textDecoration: `none`,
              fontFamily: `Hanken Grotesk`,
              fontWeight: `700`,
              letterSpacing: `-1px`,
              lineHeight: `100%`,
              color: `var(--color-font)`,
              //color: `#2929e9`,
              marginLeft: "2rem",
              //paddingBottom: "1rem",
            }}
          >
            Alex Santafé
          </span>

          <nav className="navbar" style={{}}>
            <button
              type="button"
              className="caja__close-button"
              onClick={() => setNavbarOpen(prev => !prev)}
              style={{
                color: "var(--color-font)",
                fontSize: "48px",
                top: ".5rem",
                right: "1rem",
                position: "fixed",
              }}
            >
              &times;
              {
                //navbarOpen ? `&times` : "open"
              }
            </button>

            <div className="navbar" style={{ margin: "2rem" }}>
              <ul>
                {samplePageLinks.map((link, i) => (
                  <React.Fragment key={link.url}>
                    <li>
                      {/* <span>0{i + 1}</span>- */}
                      <Link
                        to={`/${link.url}`}
                        onClick={() => setNavbarOpen(prev => !prev)}
                      >
                        {link.text}
                      </Link>
                      {/* i !== samplePageLinks.length - 1 && <> · </> */}
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </nav>
          <div
            style={{
              margin: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                //fontSize: `var(--font-sm)`,
                fontSize: `1.25rem`,
                textDecoration: `none`,

                lineHeight: `100%`,
                color: `var(--color-font)`,
              }}
            >
              <p>Contact</p>
              <h2
                style={{
                  margin: "0",
                  fontWeight: "400",
                  fontSize: "var(--font-md)",
                }}
              >
                <li
                  style={{ color: "var(--color-font)" }}
                  className="socialLinks"
                >
                  <a
                    href="mailto:alexsantafe@gmail.com"
                    style={{ color: "var(--color-font)" }}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      style={{ marginRight: "16px", width: "24px" }}
                      icon={faEnvelope}
                    />
                    Email
                  </a>
                </li>
                <li
                  style={{ color: "var(--color-font)" }}
                  className="socialLinks"
                >
                  <a
                    href="https://www.linkedin.com/in/alexsantafe/"
                    style={{ color: "var(--color-font)" }}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      style={{ marginRight: "16px", width: "24px" }}
                      icon={faLinkedin}
                    />
                    LinkedIn
                  </a>
                </li>
                <li
                  style={{ color: "var(--color-font)" }}
                  className="socialLinks"
                >
                  <a
                    href="https://www.instagram.com/alexsantafe/"
                    style={{ color: "var(--color-font)", gap: "1.25rem" }}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      style={{ marginRight: "16px", width: "24px" }}
                      icon={faSquareInstagram}
                    />
                    Instagram
                  </a>
                </li>
                <li
                  style={{ color: "var(--color-font)" }}
                  className="socialLinks"
                >
                  <a
                    href="https://www.instagram.com/alexsantafe/"
                    style={{ color: "var(--color-font)", gap: "1.25rem" }}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      style={{ marginRight: "16px", width: "24px" }}
                      icon={faWeixin}
                    />
                    WeChat
                  </a>
                </li>
                {/*
                    
                    {socialLinks.map(link => (
                      <li style={{ color: "var(--color-font)" }} className="socialLinks">
                        <FontAwesomeIcon icon={`${link.description}`} />
                        {/* <FontAwesomeIcon icon={faWeixin} />
                          <FontAwesomeIcon icon={faSquareWhatsapp} />
                    <FontAwesomeIcon icon={faSquareInstagram} /> 
                        {console.log(link.description)}
                        <a
                          href={`${link.url}`}
                          style={{ color: "var(--color-font)" }}
                          target="_blank"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))
                    */}
              </h2>
            </span>
          </div>
        </div>
      </div>
      <div id="MovingHead">
        <animated.div
          onMouseEnter={() => {
            toggleAnimation()
          }}
          className={`x ${isHovering ? "stop-animation" : ""}`}
          styles={{ top: "1rem", right: "2rem" }}
          onClick={() => {
            toggleAnimation()
            handleToggle()
            setIsHovering(!isHovering)
            setNavbarOpen(prev => !prev)
          }}
        >
          <div
            className={`y ${isHovering ? "stop-animation" : ""}`}
            onClick={() => (
              toggleAnimation(),
              //console.log("clickhead"),
              setIsHovering(!isHovering),
              setNavbarOpen(prev => !prev)
            )}
          >
            <img
              src={
                isHovering
                  ? //https://cdn.glitch.global/f4eb5f23-47fe-4e21-8ff7-89cac12f9c1c/Group%2044.svg?v=1687696761955
                    //? "https://cdn.glitch.global/a44f2617-a9bb-43c2-a85a-e742871da59a/alex-santafe-closed.svg?v=1643860557805"
                    //: "https://cdn.glitch.global/a44f2617-a9bb-43c2-a85a-e742871da59a/alex-santafe-open.svg?v=1643860557805"
                    "https://cdn.glitch.global/f4eb5f23-47fe-4e21-8ff7-89cac12f9c1c/Group%2044.svg"
                  : "https://cdn.glitch.global/f4eb5f23-47fe-4e21-8ff7-89cac12f9c1c/alex-santafe-logo.svg?v=1687795856173"
              }
              className=""
              alt={navbarOpen ? "hello" : "goodbye"}
              //onClick={handleToggle}
            />
          </div>
        </animated.div>
      </div>
    </>
  )
}

export default MovingHead
