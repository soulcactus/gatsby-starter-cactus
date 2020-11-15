import React from 'react';
import styled from 'styled-components';

export default function Category({ categories }: any) {
    return (
        <StyledCategory>
            <button type="button">prev</button>
            <ul>
                {categories.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button type="button">next</button>
        </StyledCategory>
    );
}

const StyledCategory = styled.nav`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 5rem;
    margin: 3rem 0 0;
    background: #ddd;

    button {
        &:first-child {
            position: absolute;
            left: -2rem;
        }

        &:last-child {
            position: absolute;
            right: -2rem;
        }
    }

    ul {
        display: flex;
        margin: 0 5rem;

        li {
            padding: 1rem 2rem;
            background: white;
        }
    }
`;
