import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { graphql, StaticQuery } from 'gatsby'

import Img from 'gatsby-image'

class About extends React.Component {
  render() {
    return (
      <StaticQuery
        query={aboutPhotosQuery}
        render={data => (
          <article
            id="about"
            className={`${this.props.article === 'about' ? 'active' : ''} ${
              this.props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
          >
            <h2 className="major">About Us</h2>
            <span className="owen">
              <Img fluid={data.owen.childImageSharp.fluid} />
            </span>
            <span className="carolina">
              <Img fluid={data.carolina.childImageSharp.fluid} />
            </span>
            <p>
              <FormattedMessage id="about" values={{ br: <br /> }} />
            </p>
          </article>
        )}
      />
    )
  }
}

export default About

export const aboutPhotosQuery = graphql`
  query aboutPhotosQuery {
    owen: file(relativePath: { eq: "Owen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carolina: file(relativePath: { eq: "Carolina.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
