import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from '@emotion/styled';

const Footer = styled.footer`
    padding: 1rem 3rem;
    border-top: 2px solid #ececec;
    text-align: center;
    font-size: 0.9rem;
    color: var(--font-color);

    a {
       font-weight: bold;
       border-bottom: 2px solid currentColor;
       color: #555; 
    }
`

const Layout = ({ children }) => (
    <StaticQuery query={graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                title
                description
                author
                }
            }
        }
    `}
        render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
                <div>
                    <main>{children}</main>
                    <Footer>
                        <p>
                            Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
                            Hosted on <a href="https://www.netlify.com">Netlify</a>.
                            Code on <a href="https://github.com/ananyaneogi/dev-conferences-india">Github</a>.
                        </p>
                        <p>
                            <span role="img" aria-label="Author of the website">👩‍💻</span> <a href={data.site.siteMetadata.author}>Ananya Neogi</a>
                        </p>
                    </Footer>
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
