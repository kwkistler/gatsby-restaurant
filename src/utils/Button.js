import styled from "styled-components"
import { styles } from "../utils"

const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border-radius: 4px;
  cursor: pointer;
  ${styles.border({ colors: `${styles.colors.mainWhite}` })};
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
    
    `

export { BannerButton, SectionButton }
