import Calculator from '../components/Calculator';
import React from 'react';
import renderer from 'react-test-renderer';

describe('the calculator snapshot and react testing library', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});