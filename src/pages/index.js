import React from "react"

import Layout, { StateContext } from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home"
import Profile from "../components/Profile"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StateContext.Consumer>
      {({ showProfile }) => (
        <>
          {showProfile ? (
            <Profile />
          ) : (
            <div>
              <Home />
              <Projects />
            </div>
          )}
        </>
      )}
    </StateContext.Consumer>
  </Layout>
)

export default IndexPage
