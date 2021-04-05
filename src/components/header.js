import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { StateContext } from "./layout"

const BACKGROUND_COLOR = "#ddd"

const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  color: ${props => (props.scrolled ? "black" : "white")};
  background: ${props => (props.scrolled ? BACKGROUND_COLOR : "transparent")};
  height: 12rem;
  color: white;
  line-height: 1.5;
  width: 100%;
  padding: 0 5rem;
  justify-content: space-between;
  z-index: 999999;

  @media (max-width: 950px) {
    padding: 0 2rem;
  }

  @media (max-width: 600px) {
    padding: 0 0 0 2rem;
  }
`

const StyledItem = styled.div`
  &&&&& {
    padding: 0rem 1rem;
    overflow: hidden;

    cursor: pointer;

    @media (max-width: 599px) {
      padding: 0;
    }
  }
`

const StyledTitle = styled.div`
  font-size: 5rem;
  color: ${props => (props.scrolled ? "black" : "white")};

  @media (max-width: 400px) {
    font-size: 3.5rem;
    margin-right: 0.5rem;
  }
`

const StyledProfileLink = styled.div`
  &&&& {
    font-size: 2.3rem;
    font-weight: 600;
    padding: 0;
    margin: 0;
    color: ${props => (props.scrolled ? "black" : "white")};

    @media (max-width: 599px) {
      -webkit-writing-mode: vertical-lr;
      writing-mode: vertical-lr;

      text-orientation: upright;
      font-size: 1.2rem;
      background: ${BACKGROUND_COLOR};
      color: black;
      padding: 1rem 1.5rem 0.4rem 1rem;
      letter-spacing: 0;
    }
  }
`

const StyledLink = styled(Link)`
  &&& {
    font-size: 100px;
    text-decoration: none;
  }
`

const Header = ({ siteTitle, scrolled }) => {
  return (
    <StateContext.Consumer>
      {({ toggleShowProfile, showProfile }) => (
        <StyledHeader scrolled={scrolled}>
          <StyledItem>
            <StyledLink to="/" onClick={() => toggleShowProfile(false)}>
              <StyledTitle scrolled={scrolled}>
                {siteTitle.toUpperCase()}
              </StyledTitle>
            </StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledProfileLink
              scrolled={scrolled}
              onClick={() => toggleShowProfile(!showProfile)}
            >
              {showProfile ? "BACK" : "PROFILE"}
            </StyledProfileLink>
          </StyledItem>
        </StyledHeader>
      )}
    </StateContext.Consumer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
