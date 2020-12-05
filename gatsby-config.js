module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: './src',
                aliases: {
                    '@aliases': './aliases',
                    '@components': './components',
                    '@constants': './constants',
                    '@hooks': './hooks',
                    '@interfaces': './interfaces',
                    '@pages': './pages',
                    '@styles': './styles',
                    '@templates': './templates',
                    '@utils': './utils',
                    helpers: './helpers',
                    static: {
                        root: './public',
                        alias: './static',
                    },
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'blog',
                path: `${__dirname}/content/blog`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'assets',
                path: `${__dirname}/content/assets`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1.0725rem',
                        },
                    },
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-emoji',
                    'gatsby-remark-prismjs',
                    'gatsby-remark-smartypants',
                ],
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {},
        },
        'gatsby-plugin-feed',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                background_color: '#ffffff',
                display: 'minimal-ui',
                icon: 'content/assets/gatsby-icon.png',
                name: 'Gatsby Starter Blog',
                short_name: 'GatsbyJS',
                start_url: '/',
                theme_color: '#663399',
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/, // See below to configure properly
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // "gatsby-plugin-offline",
    ],
    siteMetadata: {
        author: {
            name: 'soulcactus',
            summary: '🌵 Front-End Developer',
        },
        description: 'A starter blog demonstrating what Gatsby can do.',
        siteUrl: 'https://gatsby-starter-blog-demo.netlify.app/',
        social: {
            github: 'soulcactus',
            facebook: '/',
            twitter: '_soulcactus',
        },
        title: 'Cactus',
    },
};
