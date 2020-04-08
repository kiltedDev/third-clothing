import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  SignInButtonsContainer
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [ userCredentials, setUserCredentials ] = useState({
    email: '',
    password: ''
  })
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart( email, password );
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  return (
    <SignInContainer className='sign-in'>
      <SignInTitle
        children='I already have an account'
        />
      <span>Sign in with your email and password</span>
      <form onSubmit={ handleSubmit }>
        <FormInput
          name='email'
          type='email'
          handleChange={ handleChange }
          value={ email }
          label='email'

          />
        <FormInput
          name='password'
          type='password'
          value={ password }
          handleChange={ handleChange }
          label='password'

          />
        <SignInButtonsContainer className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton
            onClick={ googleSignInStart }
            type='button'
            isGoogleSignIn
            children='Sign in with Google'
            />
        </SignInButtonsContainer>
      </form>
    </SignInContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch( googleSignInStart() ),
  emailSignInStart: (email, password) => dispatch( emailSignInStart({ email, password }) )
})

export default connect( null, mapDispatchToProps )( SignIn );
