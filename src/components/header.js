import * as React from "react"
import { Link } from "gatsby"
//import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      //margin: `0 auto`,
      marginTop: `1rem`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <div className="header_title" style={{}}>
      <Link
        to="/"
        style={{
          //fontSize: `var(--font-sm)`,
          fontSize: `2em`,
          textDecoration: `none`,
          fontFamily: `Hanken Grotesk`,
          fontWeight: `700`,
          letterSpacing: `-1px`,
          lineHeight: `100%`,
        }}
      >
        {siteTitle}
      </Link>
      <p className="title_style" style={{}}>
        <span
          className="dot"
          style={
            {
              /* fontSize: "2em",
            lineHeight: "32px",
            position: "absolute",
            margin: "8px",
            color: "var(--color-primary)", */
            }
          }
        >
          ·
        </span>{" "}
        <span className="title_padding" style={{}}>
          {" "}
          Illustration{" "}
        </span>
      </p>
    </div>
  </header>
)

export default Header
