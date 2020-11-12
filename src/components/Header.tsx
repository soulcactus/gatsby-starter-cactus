import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { HeaderProps } from '@interfaces/components/header';
import { StyledWrapper } from '@styles/common';

export default function Header(props: HeaderProps) {
    const { title } = props;

    return (
        <StyledHeader>
            <StyledWrapper>
                <h1>
                    <Link to="/">{title}</Link>
                </h1>
            </StyledWrapper>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 10rem;

    h1 {
        font-family: 'ubuntu', sans-serif;
        font-size: 4rem;
        font-weight: bold;
        letter-spacing: -0.2rem;
    }
`;
