import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

const props= {product: {name:'test', brand: 'brand'}};
describe('Product.js', () => {
    it('should render the component', () => {
        const wrapper = shallow(<Product {...props} />);
        const li = wrapper.find('li');
        expect(li.length).toEqual(1);
    });
    it('should display name of product', () => {
        const wrapper = shallow(<Product {...props} />);
        const div = wrapper.find('div');
        expect(div.at(0).text()).toEqual(`Name: ${props.product.name}`);
    });
    it('should display brand of the product',  () => {
        const wrapper = shallow(<Product {...props} />);
        const div = wrapper.find('div');
        expect(div.at(1).text()).toEqual(`Brand: ${props.product.brand}`);
    })
    it('should display cart button ',  () => {
        const wrapper = shallow(<Product {...props} />);
        const button = wrapper.find('button');
        expect(button.length).toEqual(1);
        expect(button.text()).toEqual('Add to cart');
    })
});