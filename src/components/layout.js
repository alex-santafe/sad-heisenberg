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
import Cta from "../components/cta"

/*
export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  )
}
*/

const Layout = ({ children, headerChild }) => {
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
        headerChild={headerChild}
      >
        {headerChild}
      </Header>
      {/*<div
        style={{
          margin: `0 auto`,
          //maxWidth: `var(--size-content)`,
          //padding: `var(--size-gutter)`,
          //padding: "0 32px",
        }}
      > */}
      <main>{children}</main>
      <Cta />
      <footer
        style={{
          borderTop: `1px solid #ffe36f`,
          background: `var(--color-primary)`,
          //marginTop: `var(--space-5)`,
          paddingLeft: `var(--space-5)`,
          paddingTop: `var(--space-4)`,
          paddingBottom: `var(--space-4)`,
          fontSize: `var(--font-sm)`,
          //padding: `var(--space-2)`,
          // paddingTop: `var(--space-3)`,
          color: `var(--color-font)`,
        }}
      >
        © {new Date().getFullYear()} &middot; Alex Santafé -{" "}
        {/* Made using 🥢 in
        Hong Kong -- */}
        Made with a lot of 🥟 in Hong Kong
      </footer>
    </>
  )
}

export default Layout
