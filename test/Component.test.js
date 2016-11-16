import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Component from '../src/Component.js';

test('Render component', (t) => {
    let click = () => {};
    let wrapper = shallow(<Component click={ click } />);
    t.is(wrapper.find('p').length, 2);
    t.is(wrapper.find('p').at(0).text(), Component.defaultProps.content);
    t.is(wrapper.find('p').at(1).text(), `clicks: ${Component.defaultProps.clicks}`);
});