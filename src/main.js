import React from 'react';
import ReactDom from 'react-dom';
import Component from './Component.js';

let click = (e) => {
    console.log('The `click` function has not been implemented yet.');
};

ReactDom.render(
    <Component click={ click } />,
    document.getElementById('root')
);