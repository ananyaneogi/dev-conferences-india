import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const HeaderStyle = styled.header`
  position: relative;
    background: background: rgb(142,156,255);
    background: linear-gradient(45deg, rgba(142,136,255,1) 0%, rgba(0,31,255,1) 100%);

    svg.decoration {
        fill: #fff;
        position: relative;
        top: 10px;
        z-index: 0;
    }
`

const Content = styled.div`
    padding: 3rem 3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    z-index: 1;

    .icon-notification {
        width: 65px;
    }

    @media(max-width: 768px) {
        flex-direction: column;
    }

    @media(max-width: 500px) {
        padding: 1rem 1rem 0;
    }
`

const ButtonLink = styled.a`
    color: #fff;
    background: #6d7fff;
    ${'' /* background: #8e9cff; */}
    padding: 4px 16px;
    border-radius: 3px;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 30px;
    display: block;
    width: fit-content;

    svg {
        width: 1.4rem;
        margin-left: 5px;
        vertical-align: middle;
        top: -1px;
        fill: currentColor;
    }

    &:hover {
        background: #8e9cff;
    }
}
`

const Header = ({ siteTitle, description }) => (
    <HeaderStyle>
        <Content>
            <div>
                <h1 style={{ margin: 0 }}>
                    <Link
                        to="/"
                        style={{
                            fontSize: `2rem`,
                            color: `white`,
                            textDecoration: `none`,
                        }}
                    >
                        {siteTitle}
                    </Link>
                </h1>
                <p style={{ color: `white`, marginTop: 12 }}>{description}</p>
            </div>
            <ButtonLink href="https://github.com/ananyaneogi/dev-conferences-india">
                Add an Event on Github
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 15 4 L 15 9 L 3 9 C 2.448 9 2 9.448 2 10 L 2 14 C 2 14.552 2.448 15 3 15 L 15 15 L 15 20 L 23 12 L 15 4 z" /></svg>
            </ButtonLink>
        </Content>
        <svg fillRule="evenodd" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 240" className="decoration"><g><path d="M1920,144.5l0,95.5l-1920,0l0,-65.5c196,-36 452.146,-15.726 657.5,8.5c229.698,27.098 870,57 1262.5,-38.5Z"></path></g></svg>
    </HeaderStyle>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
    description: PropTypes.string
}

export default Header
