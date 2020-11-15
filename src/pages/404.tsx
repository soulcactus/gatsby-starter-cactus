import { graphql } from 'gatsby';
import React from 'react';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { NotFoundProps } from '@interfaces/pages/notFound';

export default function NotFound(props: NotFoundProps) {
    const { data } = props;
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout title={siteTitle}>
            <SEO title="404: Not Found" />
            <h1>Not Found</h1>
            <p>You just hit a route that dosen&#39;t exist... the sadness.</p>
        </Layout>
    );
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
