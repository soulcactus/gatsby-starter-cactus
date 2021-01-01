import { ChangeEvent } from 'react';
import { FixedObject } from 'gatsby-image';

export interface HandleChangeInputElement {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IsDarkTheme {
    isDarkTheme: boolean;
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
            thumbnail?: {
                childImageSharp: {
                    fixed: FixedObject;
                };
            };
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
