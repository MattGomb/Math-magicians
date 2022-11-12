import renderer from 'react-test-renderer';
import React from 'react';
import Home from '../components/Home';

describe('the calculator snapshot and react testing library', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
