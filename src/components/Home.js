import React from "react"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery, graphql } from "gatsby"
import styled, { keyframes, css } from "styled-components"

const StyledIndexPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const StyledMainHeader = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translateX(-50%);

  &::before {
    height: 0 !important;
  }

  @media (max-width: 670px) {
    width: 100%;
  }
`

const moveFromLeft = keyframes`
    0% {
    opacity: 0;
    transform: translateX(-10rem); }
  80% {
    transform: translateX(1rem); }
  100% {
    opacity: 1;
    transform: translate(0); } 
`

const moveFromRight = keyframes`
    0% {
    opacity: 0;
    transform: translateX(10rem); }
  80% {
    transform: translateX(-1rem); }
  100% {
    opacity: 1;
    transform: translate(0); }
`

const StyledMainHeaderItem = styled.div`
  margin: 2rem;
  line-height: 1.2;
  font-size: 6rem;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 950px) {
    font-size: 4rem;
  }

  @media (max-width: 340px) {
    margin: 1.25rem;
  }
`

const Home = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <StyledIndexPage>
          <BackgroundImage
            Tag="section"
            fluid={imageData}
            css={css`
              width: 100%;
              height: 100%;
              -webkit-clip-path: polygon(
                0 0,
                100% 0,
                100% 90vh,
                50% 100%,
                0 90vh
              );
              clip-path: polygon(0 0, 100% 0, 100% 90vh, 50% 100%, 0 90vh);
            `}
          />
          <StyledMainHeader>
            <StyledMainHeaderItem
              css={css`
                animation: ${moveFromLeft} 1.2s 0s ease-out;
              `}
            >
              Web Developer
            </StyledMainHeaderItem>
            <StyledMainHeaderItem
              css={css`
                animation: ${moveFromRight} 1.4s 0s ease-out;
              `}
            >
              JavaScript
            </StyledMainHeaderItem>
          </StyledMainHeader>
        </StyledIndexPage>
      )
    }}
  />
)

export default Home
