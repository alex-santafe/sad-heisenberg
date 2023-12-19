// Navigation buenaaaa

import React, { Component, useState, useEffect } from "react"
import { animated } from "react-spring"
//import { useWiggle } from "../hooks/wiggle";
//import { Link } from "wouter";
import { Link } from "gatsby"
import "../components/hairstyle.scss"

function MovingHead() {
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
    const scrollPos = window.pageYOffset

    // Update the value of your variable here
    // e.g. setVariableValue(scrollPos);
  }
  //const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    //setNavbarOpen(!navbarOpen);
    //window.location.href = "mailto:alexsantafe@gmail.com";
    // window.open('mailto:alexsantafe@gmail.com', '_blank');
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

  const x = scrollPosition.x / (document.body.clientWidth - window.innerWidth)
  const y = scrollPosition.y / (document.body.clientHeight - window.innerHeight)

  const styles = {
    animation: `x 7s linear infinite alternate, y 3s linear infinite alternate`,
    transform: `translateX(${x}%) translateY(${y}%)`,
  }

  return (
    <>
      <div id="MovingHead">
        <animated.div
          onMouseEnter={() => {
            handleChangeHello()
            toggleAnimation()
          }}
          className={`x ${isHovering ? "stop-animation" : ""}`}
          onClick={() => {
            toggleAnimation()
            setIsHovering(!isHovering)
          }}
        >
          <div
            className={`y ${isHovering ? "stop-animation" : ""}`}
            onClick={() => {
              toggleAnimation()
              setIsHovering(!isHovering)
            }}
          >
            <Link
              href="/"
              onClick={() => closeMenu()}
              style={{ cursor: "pointer" }}
            >
              <img
                src={
                  navbarOpen
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
            </Link>
          </div>
        </animated.div>
      </div>
    </>
  )
}

export default MovingHead
