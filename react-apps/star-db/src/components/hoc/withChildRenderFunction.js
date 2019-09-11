import React from 'react';

const withChildRenderFunction = (renderFunction) => (Comoponent) => (props) => <Comoponent {...props}>{renderFunction}</Comoponent>;

export default withChildRenderFunction;