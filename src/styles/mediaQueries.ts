import facepaint from 'facepaint';

export const breakpoints = {
    md: 768,
    lg: 1280,
};

export const breakpointsArray = [768, 1280];

export const media = (device: string) => {
    const breakpointsArray = Object.keys(breakpoints).map((key) => [
        key,
        breakpoints[key],
    ]);

    const [result] = breakpointsArray.reduce(
        (acc, [name, size]) =>
            device === name ? [...acc, `@media (min-width: ${size}px)`] : acc,
        [],
    );

    return result;
};

export const mediaArray = facepaint(
    breakpointsArray.map((device) => `@media (min-width: ${device}px)`),
    { literal: true, overlap: true },
);
