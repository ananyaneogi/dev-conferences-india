import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TalkCard from '../components/TalkCard';
import SpeakerImage from '../components/SpeakerImage';

import styled from "@emotion/styled"

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(340px,1fr));
    grid-gap: 3rem;
    padding: 3rem;
    height: 100%;

    @media(max-width: 500px) {
        grid-template-columns: repeat(auto-fill,minmax(240px,1fr));
        padding: 1rem;
        grid-gap: 2rem;

        .grid-head {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-around;
            align-items: center;

            h1 {
                font-size: 1.8rem;
                margin: 0;
            }
        }
    }
`

class IndexPage extends Component {
    render() {
        const { data } = this.props;
        const talks = data.allMarkdownRemark.edges;

        return (
            <Layout>
                <SEO title="Home" />
                <CardGrid>
                    <div className="grid-head">
                        <h1>Upcoming Talks</h1>
                        <SpeakerImage />
                    </div>
                    {
                        talks.filter(({ node }) => {
                            return Date.parse(node.frontmatter.start_date) - Date.parse(new Date()) > 0
                        }).map(({ node }) => (
                                <TalkCard
                                    key={node.id}
                                    title={node.frontmatter.title}
                                    start_date={node.frontmatter.start_date}
                                    end_date={node.frontmatter.end_date}
                                    location={node.frontmatter.location}
                                    url={node.frontmatter.url}
                                    coc_url={node.frontmatter.coc_url}
                                    scholarship_url={node.frontmatter.scholarship_url}
                                    summary={node.frontmatter.summary}
                                />

                            ))
                    }
                </CardGrid>
            </Layout>
        )
    }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark( sort: { fields: [frontmatter___start_date], order: ASC }) {
        edges {
            node {
                id
                frontmatter {
                    title
                    start_date(formatString: "DD MMM, YYYY")
                    end_date(formatString: "DD MMM, YYYY")
                    location
                    url
                    coc_url
                    scholarship_url
                    summary
                  }
            }
        }
    }
}
      
`