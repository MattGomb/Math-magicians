import renderer from 'react-test-renderer';
import React from 'react';
import Quote from '../components/Quote';

describe('the calculator snapshot and react testing library', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
