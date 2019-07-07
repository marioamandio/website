/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "semantic-ui-less/semantic.less"

import { THEME_COLOR } from "../utils/globals"

const StyledLayout = styled.main`
  margin: 0 auto;
  padding: 0;
  background-color: ${THEME_COLOR};
`

const StyledPage = styled.div`
  &&&&&&&&&& {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
  }
`

const graphQL = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const StateContext = React.createContext({
  showProfile: false,
  toggleShowProfile: null,
})

class Layout extends React.Component {
  state = {
    showProfile: false,
    scrolled: false,
    toggleShowProfile: this.setProfile.bind(this),
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollToElement)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollToElement)
  }

  handleScrollToElement = event =>
    this.setState({ scrolled: window.scrollY > 50 ? true : false })

  setProfile(bool) {
    this.setState({ showProfile: bool })
  }

  render() {
    return (
      <StaticQuery
        query={graphQL}
        render={data => (
          <StyledPage>
            <StateContext.Provider value={this.state}>
              <Header
                scrolled={this.state.scrolled}
                siteTitle={data.site.siteMetadata.title}
              />
              <StyledLayout>{this.props.children}</StyledLayout>
            </StateContext.Provider>
          </StyledPage>
        )}
      />
    )
  }
}

export default Layout
