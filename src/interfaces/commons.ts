export interface DarkTheme {
    darkTheme: boolean;
}

export interface PostData {
    node: {
        excerpt: string;
        fields: {
            slug: string;
        };
        frontmatter: {
            category: string;
            date: string;
            description: string;
            // TODO: replace type any
            thumbnail?: any;
            title: string;
        };
    };
}

export interface SiteMetaData {
    siteMetadata: Title;
}

export interface Title {
    title: string;
}
