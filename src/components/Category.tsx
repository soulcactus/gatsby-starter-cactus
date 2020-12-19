import styled from '@emotion/styled';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import * as Scroll from 'react-scroll';

import { CategoryProps } from '@interfaces/components/category';
import { $size } from '@styles/mixins';
import { normalBoxStyles } from '@styles/modules';

const scroller = Scroll.scroller;
const Element = Scroll.Element;

export default function Category(props: CategoryProps) {
    const { categories } = props;
    const [categoryState, setCategory] = useState(0);
    const containerRef = useRef(null);

    const handleCategory = useCallback((index) => {
        setCategory(index);
    }, []);

    const handlePrevious = useCallback(() => {
        if (categoryState !== 0) {
            setCategory(categoryState - 1);
        }
    }, [categoryState]);

    const handleNext = useCallback(() => {
        if (categoryState !== categories?.length) {
            setCategory(categoryState + 1);
        }
    }, [categories, categoryState]);

    useEffect(() => {
        const container = containerRef.current;
        const categoryList = container.querySelector('ul');
        const categoryItems = categoryList.querySelectorAll('li');
        let previousWidth = 0;

        categoryItems.forEach((item: any, index: number) => {
            if (index < categoryState) {
                previousWidth += item.clientWidth;
            }
        });

        scroller.scrollTo('on', {
            containerId: 'categoryContainer',
            delay: 50,
            duration: 120,
            offset:
                -container.scrollWidth +
                previousWidth -
                (180 -
                    Math.floor(categoryItems[categoryState].clientWidth / 2)) +
                (700 - container.clientWidth) / 2,
            horizontal: true,
            ignoreCancelEvents: true,
            smooth: 'linear',
            spy: true,
        });
    }, [categoryState]);

    return (
        <StyledCategory id="categoryContainer" ref={containerRef}>
            <button
                aria-label="Show Previous Category Posts"
                onClick={handlePrevious}
                type="button"
            >
                <FiChevronLeft />
            </button>
            <ul role="tablist">
                <li role="tab">
                    <StyledElement name={!!categoryState ? null : 'on'}>
                        <button
                            aria-label="Show All Category Posts"
                            className={!!categoryState ? null : 'on'}
                            onClick={() => handleCategory(0)}
                            type="button"
                        >
                            All
                        </button>
                    </StyledElement>
                </li>
                {categories?.map((item, index) => (
                    <li key={index} role="tab">
                        <StyledElement name={!!categoryState ? null : 'on'}>
                            <button
                                aria-label={`Show ${item} Category Posts`}
                                className={
                                    categoryState === index + 1 ? 'on' : null
                                }
                                onClick={() => handleCategory(index + 1)}
                                type="button"
                            >
                                {item}
                            </button>
                        </StyledElement>
                    </li>
                ))}
            </ul>
            <button
                aria-label="Show Next Category Posts"
                onClick={handleNext}
                type="button"
            >
                <FiChevronRight />
            </button>
        </StyledCategory>
    );
}

const StyledCategory = styled.nav`
    ${normalBoxStyles};
    position: relative;
    ${$size('100%', '5rem')};
    margin: 2rem 0 3rem;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.backgrounds.light};
    box-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 9, 52, 0.1),
        -0.5rem -0.5rem 0.5rem white;
    white-space: nowrap;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    > button {
        position: sticky;
        min-width: 3rem;
        height: 3rem;
        border-radius: 50%;
        line-height: 1.2rem;
        font-size: 2rem;
        color: #797979;
        background: linear-gradient(145deg, #ffffff, #eaeaea);
        box-shadow: 3px 3px 5px rgba(0, 9, 52, 0.25), -2px -2px 2px #ffffff;

        &:active {
            background: #f5f5f5;
        }

        &:first-child {
            left: 0;

            svg {
                margin-right: 0.2rem;
            }
        }

        &:last-child {
            right: 0;

            svg {
                margin-left: 0.2rem;
            }
        }
    }

    ul {
        display: flex;
        align-items: center;
        height: 100%;
        margin: 0 2rem;
    }

    li {
        &:not(:last-child) {
            padding: 0 1rem 0 0;
        }

        button {
            ${$size('100%', '3rem')};
            border-radius: 3rem;
            padding: 0 2rem 0.2rem;
            background: ${(props) => props.theme.backgrounds.light};
            line-height: unset;
            font-size: 1.3rem;
            color: #797979;
            box-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 9, 52, 0.07),
                -0.5rem -0.5rem 0.5rem white;

            &:active,
            &.on {
                font-weight: bold;
                color: #333;
                box-shadow: 0.5rem 0.2rem 1rem rgba(0, 9, 52, 0.075),
                    inset 0.4rem 0.4rem 0.4rem rgba(0, 9, 52, 0.175),
                    inset 0 -0.4rem 0.2rem white;
            }
        }
    }
`;

const StyledElement = styled(Element)`
    height: 100%;
`;
