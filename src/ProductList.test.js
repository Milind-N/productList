import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';

describe('ProductList.js', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ProductList />);
    });

    it('should render the dumb component', () => {
        expect(wrapper.length).toEqual(1);
    });
});