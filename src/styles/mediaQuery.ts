const breakpoints = {
    xs: 0,
    sm: 375,
    md: 768,
    lg: 1280,
    xl: 1440,
};

const mediaQuery = (key: keyof typeof breakpoints) => {
    return (style: String | TemplateStringsArray) =>
        `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};

export default mediaQuery;
