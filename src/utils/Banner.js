import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

export const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: "0.75rem" })}
    ${styles.subtitle};
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.75rem" })}
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  @media (max-width: 768px) {
    .title {
      font-size: 2.3rem;
    }
    .subtitle {
      font-size: 1.2rem;
    }
  }
`

Banner.defaultProps = {
  title: "default title",
}
