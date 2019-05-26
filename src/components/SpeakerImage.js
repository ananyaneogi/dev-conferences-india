import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SpeakerImage = () => (
    <StaticQuery query={graphql`
        query {
            placeholderImage: file(relativePath: { eq: "speaker.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `}
        render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="a woman public speaking" className="speaker-image" />}
    />
)
export default SpeakerImage
