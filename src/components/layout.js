/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../fonts/fonts.css"
import MovingHead from "../components/movinghead"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MovingHead></MovingHead>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        //path={data.site.siteMetadata?.siteUrl}
      />
      <div
        style={{
          margin: `0 auto`,
          //maxWidth: `var(--size-content)`,
          //padding: `var(--size-gutter)`,
          padding: "0 32px",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            marginBottom: `var(--space-5)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Alex Santafé - Built with
          {` `}
          Gatsby
        </footer>
      </div>
    </>
  )
}

export default Layout
