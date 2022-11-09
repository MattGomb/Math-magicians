import Navbar from '../components/Navbar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('the calculator snapshot and react testing library', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BrowserRouter><Navbar/></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
