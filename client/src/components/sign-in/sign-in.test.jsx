import { shallow } from 'enzyme';
import React from 'react';
import { SignIn } from './sign-in.component';

describe('SignIn component', () => {
  let wrapper;
  let snapshot;
  let mockGoogleSignInStart;
  let mockEmailSignInStart;
  beforeAll(() => {
    mockGoogleSignInStart = jest.fn(),
    mockEmailSignInStart = jest.fn()

    const mockProps = {
      email: 'bob@bob.net',
      password: 'iamasecurepassword',
      googleSignInStart: mockGoogleSignInStart,
      emailSignInStart: mockEmailSignInStart
    };
    wrapper = shallow(<SignIn { ...mockProps } />);
    snapshot = wrapper.debug();
  });

  it('should render SignIn component',() => {
    expect( snapshot ).toMatchSnapshot();
  });

  it('should call googleSignInStart when Google Button is clicked',() => {
    wrapper.find('CustomButton').at(1).simulate('click');
    expect(mockGoogleSignInStart).toHaveBeenCalled();
  });
});
