import styled from 'styled-components';

import { CategoryProps } from '@interfaces/components/category';
import { normalBoxStyles, size } from '@styles/mixins';

export default function Category(props: CategoryProps) {
    const { categories } = props;

    return (
        <StyledCategory>
            <button type="button">prev</button>
            <ul>
                {categories.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button type="button">next</button>
        </StyledCategory>
    );
}

const StyledCategory = styled.nav`
    ${normalBoxStyles};
    position: relative;
    ${size('100%', '5rem')};
    margin: 1.5rem 0 0;
    background: #ddd;

    button {
        position: absolute;

        &:first-child {
            left: -2rem;
        }

        &:last-child {
            right: -2rem;
        }
    }

    ul {
        display: flex;
        margin: 0 5rem;
    }

    li {
        padding: 1rem 2rem;
        background: white;
    }
`;
