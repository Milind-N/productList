import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

const props= {product: {name:'test'}};
describe('Product.js', () => {
    it('should render the component', () => {
        const wrapper = shallow(<Product {...props} />);
        const li = wrapper.find('li');
        expect(li.length).toEqual(1);
        expect(li.text()).toEqual(`Name: ${props.product.name}`);
    })
});