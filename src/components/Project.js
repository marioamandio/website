import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Grid, Button } from "semantic-ui-react"
const StyledImage = styled.div`
  width: 100%;
`

const StyledGridElement = styled(Grid.Column)`
  &&&&& {
    background: black;
    color: white;
    margin: 12px;
    padding: 0;
    overflow: hidden;
    border-radius: 4px;
  }
`

const Legend = styled.div`
  padding: 5rem 3rem;
`

const Title = styled.div`
  font-size: 4rem;
  margin-bottom: 3.4rem;
  line-height: 1.2;
  font-weight: 550;
`

const Description = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  line-height: 1.3;
  letter-spacing: 0.8px;
  font-size: 1.6rem;
`

const Project = ({ data: { title, description, image, link } }) => (
  <StyledGridElement mobile={15} tablet={8} computer={5}>
    <StyledImage>
      <Img fluid={image.fluid} />
    </StyledImage>
    <Legend>
      <Title>{title}</Title>
      <hr />
      <Description>{description.description}</Description>
      <a rel="noopener noreferrer" href={link} target="_blank">
        <Button>Try It!</Button>
      </a>
    </Legend>
  </StyledGridElement>
)

export default Project
