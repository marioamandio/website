import React from "react"
import styled from "styled-components"
import { Icon, Popup } from "semantic-ui-react"

const IconLink = styled.a`
  color: white;
`

const StyledIcon = styled(Icon)`
  &&& {
    margin: 0 1rem;
    cursor: pointer;
  }
`

const IconComponent = ({ link, name, iconName }) => (
  <Popup
    content={name}
    key={name}
    size="huge"
    inverted
    offset="0, 10px"
    position="bottom center"
    trigger={
      <IconLink rel="noopener noreferrer" href={link} target="_blank">
        <StyledIcon name={iconName} size="huge" />
      </IconLink>
    }
  />
)

export default IconComponent
