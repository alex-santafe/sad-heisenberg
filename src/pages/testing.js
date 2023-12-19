import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

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

const Testing = () => (
  <Layout>
    <div className={styles.textCenter}>
      <Link to="/">
      <StaticImage alt="logo" src="../images/alex-santafe-head.svg" />
      </Link>
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
    <div>
      <p>joder</p>
      {Photos.map((image, i) => (
        <React.Fragment key={image.src}>
          <Link to={image.src}>
            {image.title}
            <GatsbyImage
              src={image.src}
              loading="eager"
              width={64}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Link>
          {i !== samplePageLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Testing" />

export default Testing
