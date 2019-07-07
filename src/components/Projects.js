import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Grid } from "semantic-ui-react"

import Project from "./Project"

const ProjectsWrapper = styled.div`
  width: 100%;
  margin-top: 45px;
  padding-bottom: 25px;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
`

const Header = styled.div`
  font-size: 5rem;
  line-height: 1.4;
  font-weight: 650;
  margin-bottom: 25px;
  color: #ded;
`

const StyledGrid = styled(Grid)`
  width: 95%;
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            title
            id
            description {
              id
              description
            }
            link
            image {
              fluid(maxWidth: 500) {
                aspectRatio
                srcSet
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ProjectsWrapper>
      <Header>PROJECTS</Header>
      <StyledGrid centered>
        {data.allContentfulPortfolio.edges.map(({ node }) => (
          <Project key={node.id} data={node} />
        ))}
      </StyledGrid>
    </ProjectsWrapper>
  )
}

export default Projects
