import React from "react"
import { withPrefix } from "gatsby"
import styled from "styled-components"
import IconComponent from "./IconLink"
import { THEME_COLOR } from "../utils/globals"

const textLabelColor = "#999"

const StyledProfileComponent = styled.div`
  color: white;
  display: flex;
  position: absolute;
  background: ${THEME_COLOR};
  padding: 5rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    padding: 5rem 2rem 1rem 2rem;
  }

  @media (max-width: 600px) {
    height: auto;
  }
`

const StyledMedia = styled.div`
  margin: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    margin: 0;
  }
`

const StyledResume = styled.div`
  text-indent: 4rem;
  font-size: 2rem;
  max-width: 50%;
  line-height: 1.5;
  letter-spacing: 1.3px;
  padding: 1rem;
  text-align: center;

  @media (max-width: 600px) {
    max-width: 90%;
    padding: 0;
    letter-spacing: 0;
  }
`

const StyledProfile = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-flow: column;
    margin-top: 120px;
  }
`

const StyledFollowMeIcons = styled.div`
  @media (max-width: 600px) {
    margin-bottom: 40px;
  }
`

const StyledFollowMeText = styled.div`
  color: ${textLabelColor};
  font-size: 2.3rem;
  margin-bottom: 2rem;
`

const StyledContactMeLabel = styled.div`
  color: ${textLabelColor};
  font-size: 2.3rem;
  line-height: 1.2;
  margin-bottom: 2rem;
  text-align: center;
`
const StyledContactMeEmail = styled.div`
  font-size: 1.8rem;
`

const StyledContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 7rem 3rem;

  @media (max-width: 600px) {
    padding: 3rem 1rem;
  }
`

const Profile = () => {
  return (
    <StyledProfileComponent>
      <StyledProfile>
        <StyledResume>
          <p>
            Self-taught,self-motivated Web Developer. Versatile skil set with
            experience in customer service, sales, and deliver under enormous
            amount of pressure. Received multiple awards for excelence in
            different subjects, due to felowship as a team member and focus on
            the goals aspired.
          </p>
        </StyledResume>
        <StyledContacts>
          <StyledMedia>
            <StyledFollowMeText>Follow Me:</StyledFollowMeText>
            <StyledFollowMeIcons>
              <IconComponent
                link={`https://github.com/marioamandio`}
                iconName={`github`}
                name={`github`}
              />
              <IconComponent
                link={`https://www.linkedin.com/in/mario-amandio-7427bab1/`}
                iconName={`linkedin`}
                name={`linkedin`}
              />
              <IconComponent
                link={withPrefix("/mario-resume.pdf")}
                iconName={`file text outline`}
                name={`Résumé`}
              />
            </StyledFollowMeIcons>
          </StyledMedia>
          <StyledMedia>
            <StyledContactMeLabel>
              For any enquiries, or just to say hello, get in touch and contact
              me.
            </StyledContactMeLabel>
            <StyledContactMeEmail>
              <a href="mailto:marioamandio@gmail.com">marioamandio@gmail.com</a>
            </StyledContactMeEmail>
          </StyledMedia>
        </StyledContacts>
      </StyledProfile>
    </StyledProfileComponent>
  )
}

export default Profile
