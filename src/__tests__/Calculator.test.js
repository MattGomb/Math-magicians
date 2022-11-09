import renderer from 'react-test-renderer';
import React from 'react';
import Calculator from '../components/Calculator';

describe('the calculator snapshot and react testing library', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
