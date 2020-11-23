import { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import * as Scroll from 'react-scroll';
import styled from 'styled-components';

import { CategoryProps } from '@interfaces/components/category';
import { $size, normalBoxStyles } from '@styles/mixins';

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
                (220 -
                    Math.floor(categoryItems[categoryState].clientWidth / 2)) +
                (780 - container.clientWidth) / 2,
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
    margin: 1.5rem 0 2rem;
    border-top: 0.1rem solid #ddd;
    border-bottom: 0.1rem solid #ddd;
    background: #fdfdfd;
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
        box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
        background: white;
        line-height: 1rem;
        font-size: 1.8rem;
        color: #999;

        &:first-child {
            left: 0;
            padding-right: 0.2rem;
        }

        &:last-child {
            right: 0;
            padding-left: 0.2rem;
        }

        &:hover {
            color: #333;
            transition: color 0.2s linear;
        }
    }

    ul {
        display: flex;
        height: 100%;
        margin: 0 2rem;
    }

    li {
        height: 100%;

        button {
            ${$size('100%')};
            padding: 0 2rem;
            font-size: 1.4rem;

            &.on {
                border-bottom: 0.3rem solid #666;
                font-weight: bold;
            }

            &:not(.on) {
                color: #999;
            }

            &:not(.on):hover {
                color: inherit;
                transition: color 0.2s linear;
            }
        }
    }
`;

const StyledElement = styled(Element)`
    height: 100%;
`;
