import React from 'react';
import PropTypes from 'prop-types';

const DefaultLayout = ({children}) => (
    <>
        {children}
    </>
);

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
