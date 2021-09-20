import React from 'react';

const SomePage = props => {
    return (
        <div>Hoi</div>
    );
}

SomePage.getInitialProps = async ({req, res, isServer}) => {
    let initData = {};
    return { initData };
};

SomePage.propTypes = { initData: object};

export default SomePage;