import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import React from 'react';

describe('the calculator snapshot and react testing library', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
