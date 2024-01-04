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
/*
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
*/
//console.log(Photos)

const Testing = ({ data }) => {
  const headerChild = "Illustration"
  //const pics = data.allFile.edges.node
  //const image = getImage(data.allFile.edges.node)
  const newData = data.allFile.edges.slice().reverse()
  //
  const [lightboxImage, setLightboxImage] = useState("")
  const [lightboxAltImage, setLightboxAltImage] = useState("")
  const [lightboxTitle, setLightboxTitle] = useState("")
  const [lightboxColor, setLightboxColor] = useState("")
  const [lightboxDescription, setLightboxDescription] = useState("")
  const [lightboxTextColor, setLightboxTextColor] = useState("")
  const [lightboxClient, setLightboxClient] = useState("")
  const [lightboxUrl, setLightboxUrl] = useState("")

  const openLightbox = (
    src,
    alt,
    title,
    color,
    description,
    textcolor,
    client,
    url
  ) => {
    setLightboxImage(src)
    setLightboxAltImage(alt)
    setLightboxTitle(title)
    setLightboxColor(color)
    setLightboxDescription(description)
    setLightboxTextColor(textcolor)
    setLightboxClient(client)
    setLightboxUrl(url)
  }

  const closeLightbox = () => {
    setLightboxImage("")
    setLightboxAltImage("")
  }
  //

  //
  return (
    <Layout headerChild={headerChild}>
      <div className="">
        <Link to="/"></Link>
        <h1
          style={{ margin: "0", fontWeight: "400", fontSize: "var(--font-md)" }}
        >
          An award-winning visual artist and creative director, focusing on
          illustration and product design.
        </h1>
        <p>From Barcelona, based in Hong Kong</p>
        {/*
        <p className={styles.intro}>
          <b>Example pages:</b>{" "}
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={`/${link.url}`}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
        </p>
          */}
      </div>
      <div className="gallery">
        {newData?.map(item => {
          //src, alt, title, description
          const src = item.node.childImageSharp.gatsbyImageData
          //console.log(src)
          const color =
            item.node.childImageSharp.gatsbyImageData.backgroundColor
          //console.log(color)
          //
          /*
          function pickTextColorBasedOnBgColorAdvanced(
            color,
            lightColor,
            darkColor
          ) {
            var colorY = color.charAt(0) === "#" ? color.substring(1, 7) : color
            var r = parseInt(color.substring(0, 2), 16) // hexToR
            var g = parseInt(color.substring(2, 4), 16) // hexToG
            var b = parseInt(color.substring(4, 6), 16) // hexToB
            var uicolors = [r / 255, g / 255, b / 255]
            var c = uicolors.map(col => {
              if (col <= 0.03928) {
                return col / 12.92
              }
              return Math.pow((col + 0.055) / 1.055, 2.4)
            })
            var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
            return L > 0.179 ? darkColor : lightColor
          }
          */
          function pickTextColorBasedOnBgColorAdvanced(
            bgColor,
            lightColor,
            darkColor
          ) {
            var color =
              bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor
            var r = parseInt(color.substring(0, 2), 16) // hexToR
            var g = parseInt(color.substring(2, 4), 16) // hexToG
            var b = parseInt(color.substring(4, 6), 16) // hexToB
            var uicolors = [r / 255, g / 255, b / 255]
            var c = uicolors.map(col => {
              if (col <= 0.03928) {
                return col / 12.92
              }
              return Math.pow((col + 0.055) / 1.055, 2.4)
            })
            var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
            return L > 0.179 ? darkColor : lightColor
          }

          const textColor = pickTextColorBasedOnBgColorAdvanced(
            color,
            "#FFFFFF",
            "#000000"
          )
          //console.log(textColor)
          //console.log(backgroundColor)
          //console.log("item is " + item.node.relativePath)
          //return JSONData.content.map((jItem, jIndex) => {
          return JSONData.content.map((jItem, jIndex) => {
            const alt = jItem.alt
            const title = jItem.title
            const image = jItem.image
            const description = jItem.description
            const client = jItem.client
            const url = jItem.url
            //
            //
            //console.log(src)
            //console.log(alt)
            //console.log(title)
            //console.log("jItem is " + item.node.relativePath)

            if (image == item.node.relativePath)
              return (
                <span
                  type="button"
                  className="gallery__item"
                  style={{ justifyContent: "center" }}
                  key={jIndex}
                  onClick={
                    () =>
                      openLightbox(
                        src,
                        alt,
                        title,
                        color,
                        description,
                        textColor,
                        client,
                        url
                      ) //,
                    // console.log("open!") // //
                  }
                >
                  {/* <p>
                    {title} - {alt}
              </p> */}

                  <GatsbyImage
                    className="gallery__image"
                    image={item.node.childImageSharp.gatsbyImageData}
                    objectPosition={jItem.position}
                    alt={alt}
                    key={jIndex}
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
            style={{
              color: `${lightboxTextColor}`,
            }}
          >
            &times;
          </button>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%", padding: "0 1rem" }}>
              <span
                className="caja_title"
                style={{
                  color: `${lightboxTextColor}`,
                  fontSize: `var(--font-lg)`,
                  fontWeight: "700",
                  marginBottom: "0",
                  fontFamily: `Hanken Grotesk`,
                }}
              >
                {lightboxTitle}
              </span>
              <p
                style={{
                  color: `${lightboxTextColor}`,
                  margin: "0",
                  maxWidth: "100%",
                }}
              >
                {lightboxDescription}
              </p>
              <p
                style={{
                  color: `${lightboxTextColor}`,
                  margin: "0",
                  maxWidth: "100%",
                }}
              >
                Illustration for:{" "}
                <a
                  href={lightboxUrl}
                  style={{ color: `${lightboxTextColor}` }}
                  target="_blank"
                >
                  {lightboxClient}
                </a>
              </p>
            </div>
            <button
              type="button"
              style={{
                position: "absolute",
                width: "100%",
                height: "70%",
                zIndex: "3",
                cursor: "pointer",
                bottom: "0",
              }}
              onClick={closeLightbox}
            />
            <GatsbyImage
              className="gallery__image"
              image={lightboxImage}
              alt={lightboxAltImage}
              loading="lazy"
              style={{ margin: "1rem", maxHeight: "80vh" }}
              placeholder="dominantColor"
              layout="fixed"
              objectFit="contain"
              //onClick={closeLightbox}
              onClick={closeLightbox}
            />
            {/*<p>{lightboxColor}</p>*/}

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
export const Head = () => <Seo title="Illustration" />
export const query = graphql`
  query Testing {
    allFile(
      filter: { sourceInstanceName: { eq: "gallery" } }
      sort: { relativePath: DESC }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              backgroundColor: ""
              layout: CONSTRAINED
              quality: 75
              width: 1920
            )
          }
          relativePath
        }
      }
    }
  }
`

export default Testing
