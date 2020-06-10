import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App.js', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  
  it('should render a dumb component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a div', () => {
    const div = wrapper.find('div')
    expect(div).toHaveLength(1);
    expect(div.prop('className')).toEqual('App')
  });

  it('should render a header', () => {
    const div = wrapper.find('header')
    expect(div).toHaveLength(1);
    expect(div.prop('className')).toEqual('App-header');
    expect(div.text()).toEqual('Product List');
  });
});
