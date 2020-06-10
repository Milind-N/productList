import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';

const props= {products: [{name: 'iphone'}, {name: 'LED TV'}, {name: 'Dishwasher'}]};

describe('ProductList.js', () => {
    let wrapper;    
    beforeEach(() => {
        wrapper = shallow(<ProductList {...props} />);
    });

    it('should render the dumb component', () => {
        expect(wrapper).toEqual({});
    });
});