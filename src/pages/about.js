import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
const title = "About"
const cvItems = [
  {
    year: "2006",
    name: "something",
    feat: "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    year: "2008",
    name: "something else",
    feat: "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
]
const SecondPage = () => (
  <Layout headerChild={title} style={{ padding: "0", margin: "0" }}>
    <div>
      <div
        style={{
          maxWidth: "60%",
          minHeight: "100vh",
          padding: "2rem",
          margin: "auto",
        }}
      >
        <h1 style={{ marginBottom: "1rem" }}>👋 Alex Santafe</h1>
        <p>
          I'm Alex, An award-winning visual artist and creative director,
          focusing on illustration and product design with a passion for
          creating useful, engaging & beautiful things. Originally from
          Barcelona, have been living Beijing for more than 8 years, now based
          in Hong Kong.
        </p>
        <p>
          An award-winning visual artist and creative director, focusing on
          illustration and product design with a passion for creating useful,
          engaging & beautiful things. Originally from Barcelona, have been
          living Beijing for more than 8 years, now based in Hong Kong.
        </p>
        <p
          className="titleP"
          style={{
            borderBottom: "1px solid var(--color-primary)",
            width: "100%",
            display: "flex",
          }}
        >
          <strong>Title</strong>
        </p>
        {cvItems.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{
              display: "flex",
              gap: "2rem",
              borderBottom: "1px solid #ebebeb",
              marginBottom: "1rem",
              maxWidth: "680px",
            }}
          >
            <div
              className="left"
              style={
                {
                  //width: "20%"
                }
              }
            >
              <p>{item.year}</p>
            </div>
            <div
              className="left"
              style={
                {
                  //width: "20%"
                }
              }
            >
              <p style={{ textTransform: "capitalize" }}>
                <strong>{item.name}</strong>
              </p>
            </div>
            <div
              className="right"
              style={
                {
                  // width: "80%"
                }
              }
            >
              <p>{item.feat}</p>
            </div>
          </div>
        ))}

        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title={title} />

export default SecondPage
/*
<Layout headerChild={title}>
    <h1>Hello I'm Alex Santafe</h1>
    <div
      style={{
        display: "flex",
        gap: "2rem",
      }}
    >
      <div>
        <p>
          An award-winning visual artist and creative director, focusing on
          illustration and product design with a passion for creating useful,
          engaging & beautiful things. Originally from Barcelona, have been
          living Beijing for more than 8 years, now based in Hong Kong.
        </p>
        <p>
          An award-winning visual artist and creative director, focusing on
          illustration and product design with a passion for creating useful,
          engaging & beautiful things. Originally from Barcelona, have been
          living Beijing for more than 8 years, now based in Hong Kong.
        </p>
      </div>
      <div>
        <p
          className="titleP"
          style={{
            borderBottom: "1px solid var(--color-primary)",
            width: "100%",
            display: "flex",
          }}
        >
          <strong>Title</strong>
        </p>
        {cvItems.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{
              display: "flex",
              gap: "2rem",
              borderBottom: "1px solid #ebebeb",
              marginBottom: "1rem",
              maxWidth: "680px",
            }}
          >
            <div
              className="left"
              style={
                {
                  //width: "20%"
                }
              }
            >
              <p>{item.year}</p>
            </div>
            <div
              className="left"
              style={
                {
                  //width: "20%"
                }
              }
            >
              <p style={{ textTransform: "capitalize" }}>
                <strong>{item.name}</strong>
              </p>
            </div>
            <div
              className="right"
              style={
                {
                  // width: "80%"
                }
              }
            >
              <p>{item.feat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title={title} />

export default SecondPage

*/
