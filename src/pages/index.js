import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import DefaultLayout from '../layouts/Default';

const IndexPage = () => (
    <DefaultLayout>
        <Helmet>
            <meta charSet="utf-8" />
            <html lang="en" />
            <title>Andrew Slattery</title>
            <meta name="description" content="Rants, ramblings, lessons learned, and more from a Tucson based cloud architect and full-stack developer." />
            <link rel="canonical" href="https://awslattery.com/" />
        </Helmet>
    </DefaultLayout>
);

IndexPage.propTypes = {};

export default IndexPage;
