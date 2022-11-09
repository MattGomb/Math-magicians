import renderer from 'react-test-renderer';
import Home from '../components/Home';
import React from 'react';

describe('the calculator snapshot and react testing library', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
