import renderer from 'react-test-renderer';
import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('the calculator snapshot and react testing library', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
