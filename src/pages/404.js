import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import DefaultLayout from '../layouts/Default';

const NotFoundPage = () => (
    <DefaultLayout>
        <Helmet>
            <meta charSet="utf-8" />
            <html lang="en" />
            <title>404</title>
        </Helmet>
        <h1>404</h1>
    </DefaultLayout>
);

NotFoundPage.propTypes = {};

export default NotFoundPage;
