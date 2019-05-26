import React from 'react'
import PropTypes from "prop-types"

import styled from "@emotion/styled"
// import { css } from "@emotion/core"

const CardWrapper = styled.div`
    outline: 20px dotted #ffffff;
    outline-offset: -10px;
    padding: 20px;
    background: linear-gradient(45deg,rgba(220, 220, 220, 0.34) 50%,rgba(241, 241, 241, 0.9) 92%);
    min-height: 400px;
    height: 100%;
`

const Card = styled.div`
    padding: 20px;
    background-color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const EventDate = styled.h2`
    font-size: 1rem;
`
const TalkTitle = styled.h1`
    color: var(--link-color);
    font-size: 1.5rem;
    margin: 20px 0 10px;
    line-height: 1.5;

    a {
        color: var(--link-color);

        &:hover, &:focus {
            color: #0013a3;
            svg {
                transform: translateX(5px);
                transition: 0.2s transform ease-in;
            }
        }
    }

    svg {
        fill: currentColor;
        width: 1.1rem;
        margin-left: 5px;
        vertical-align: middle;
        position: relative;
        transform: translateX(0px);
        transition: 0.2s transform ease-in;
    }
`
const Location = styled.p`
    font-size: 0.9rem;
`

const Summary = styled.p`
    font-size: 0.9rem;
    margin-bottom: 30px;
`

const ExtLink = styled.a`
    color: var(--link-color);
    font-size: 0.8rem;
    border-bottom: 2px solid currentColor;
    font-weight: bold;
    width: fit-content;

    &.scholarship-link {
        display: block;
        color: palevioletred;
    }

    &:hover, &:focus {
        color: #0013a3
    }
`;

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TalkCard = (talk) => {
    return (
        <CardWrapper>
            <Card>
                <div>
                    <EventDate>{talk.start_date} {talk.end_date ? '- ' + talk.end_date : ''}</EventDate>
                    <TalkTitle>
                        <a href={talk.url}>
                            {talk.title}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 15 4 L 15 9 L 3 9 C 2.448 9 2 9.448 2 10 L 2 14 C 2 14.552 2.448 15 3 15 L 15 15 L 15 20 L 23 12 L 15 4 z" /></svg>
                        </a>
                    </TalkTitle>
                    <Location>{talk.location}</Location>
                    <Summary>{talk.summary}</Summary>
                </div>

                <CardFooter>
                    <ExtLink href={talk.coc_url}>Code of Conduct</ExtLink>
                    { talk.scholarship_url &&
                        <ExtLink href={talk.scholarship_url} className="scholarship-link">Scholarship Available</ExtLink>
                    }
                </CardFooter>

            </Card>
        </CardWrapper>
    )
}

TalkCard.propTypes = {
    talk: PropTypes.object
}

export default TalkCard
