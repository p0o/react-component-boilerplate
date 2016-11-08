import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Component from '../src/Component.js';

test('Render component with defalut content', (t) => {
    let content = Component.defaultProps.content;
    let wrapper = shallow(<Component/>);
    t.is(wrapper.text(), content);
});

test('Render component with specific content', (t) => {
    let content = 'Hello World';
    let wrapper = shallow(<Component content={ content }/>);
    t.is(wrapper.text(), content);
});