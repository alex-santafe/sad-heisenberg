import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
//
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import "../components/caja.css"

import JSONData from "../pages/images.json"

const Photos = [
  {
    src: "../images/alex-santafe-1.jpg",
    alt: "illustration here2323",
    title: "joder",
    description: "goodbye",
    width: "1920",
    height: "1080",
  },
  {
    src: "../images/alex-santafe-2.jpg",
    alt: "illustration here2323",
    title: "ostia",
    description: "goodbye",
    width: "1920",
    height: "1080",
  },
  {
    src: "../images/alex-santafe-3.jpg",
    alt: "illustration here2323",
    title: "fuck",
    description: "goodbye",
    width: "1920",
    height: "1080",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
  { text: "Testing", url: "testing" },
]
//console.log(Photos)

const Testing = ({ data }) => {
  //const pics = data.allFile.edges.node
  const image = getImage(data.allFile.edges.node)
  const newData = data.allFile.edges.reverse()
  //
  const [lightboxImage, setLightboxImage] = useState("")
  const [lightboxAltImage, setLightboxAltImage] = useState("")
  const [lightboxTitle, setLightboxTitle] = useState("")
  const [lightboxColor, setLightboxColor] = useState("")
  const [lightboxDescription, setLightboxDescription] = useState("")

  const openLightbox = (src, alt, title, color) => {
    setLightboxImage(src)
    setLightboxAltImage(alt)
    setLightboxTitle(title)
    setLightboxColor(color)
    //setLightboxDescription(description)
  }

  const closeLightbox = () => {
    setLightboxImage("")
    setLightboxAltImage("")
  }
  //
  return (
    <Layout>
      <div className={styles.textCenter}>
        <Link to="/"></Link>
        <h1>
          Welcome to <b>Gatsby!</b>
        </h1>
        <p className={styles.intro}>
          <b>Example pages:</b>{" "}
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={`/${link.url}`}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className="gallery">
        {newData?.map(item => {
          //src, alt, title, description
          const src = item.node.childImageSharp.gatsbyImageData
          //console.log(src)
          const color =
            item.node.childImageSharp.gatsbyImageData.backgroundColor
          console.log(color)
          //console.log(backgroundColor)
          //console.log("item is " + item.node.relativePath)
          //return JSONData.content.map((jItem, jIndex) => {
          return JSONData.content.map((jItem, jIndex) => {
            const alt = jItem.alt
            const title = jItem.title
            //console.log(src)
            //console.log(alt)
            //console.log(title)
            //console.log("jItem is " + item.node.relativePath)

            if (jItem.image?.includes(item.node.relativePath))
              return (
                <span
                  type="button"
                  className="gallery__item"
                  style={{ justifyContent: "center" }}
                  key={jIndex}
                  onClick={
                    () => (
                      openLightbox(src, alt, title, color), console.log("open!")
                    ) // //
                  }
                >
                  {/* <p>
                    {title} - {alt}
              </p> */}
                  <GatsbyImage
                    className="gallery__image"
                    image={item.node.childImageSharp.gatsbyImageData}
                    alt={alt}
                    loading="lazy"
                    width="250px"
                    height="250px"
                    layout="constrained"
                    placeholder="dominantColor"
                  />
                </span>
              )

            //}
          })
        })}
      </div>
      {lightboxImage && (
        <div className="caja">
          <button
            type="button"
            className="caja__close-button"
            onClick={closeLightbox}
          ></button>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>{lightboxTitle}</p>
            <p>{lightboxDescription}</p>

            <GatsbyImage
              className="gallery__image"
              image={lightboxImage}
              alt={lightboxAltImage}
              loading="lazy"
              style={{ margin: "1rem" }}
              placeholder="dominantColor"
              //onClick={closeLightbox}
              onClick={() => (
                console.log("closed!"), console.log("yeah"), { closeLightbox } //, openLightbox(src, alt, title), ) // //
              )}
            />
            <p>{lightboxColor}</p>
            <button
              type="button"
              className="caja__bg"
              style={{ backgroundColor: `${lightboxColor}` }}
              onClick={closeLightbox}
              //style={{ background: { dominantColor } }}
            />

            {/* <img
              className="caja__image"
              src={lightboxImage}
              alt={lightboxAltImage}
              onClick={closeLightbox}
          /> */}
          </div>
        </div>
      )}
      <div>
        {/*Photos.map((image, i) => (
          <React.Fragment key={image.src}>
            {image.title}
            <StaticImage
              key={i}
              image={image.src}
              loading="eager"
              width={64}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </React.Fragment>
        )) */}
      </div>
    </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Testing" />
export const query = graphql`
  query Testing {
    allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(backgroundColor: "", layout: CONSTRAINED)
          }
          relativePath
        }
      }
    }
  }
`

export default Testing
