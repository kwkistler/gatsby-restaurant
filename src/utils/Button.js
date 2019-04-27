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
  ${styles.border({ colors: `${styles.colors.mainWhite}` })};
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
  }
`

export { BannerButton }
