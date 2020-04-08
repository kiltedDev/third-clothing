import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignUpContainer, SignUpTitle} from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [ userCredentials, setUserCredentials ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = userCredentials;

  const handleSubmit = async ( event ) => {
      event.preventDefault();
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }

      signUpStart({ displayName, email, password });
    };

  const handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  }

  return (
    <SignUpContainer className='sign-up'>
      <SignUpTitle
        className='title'
        children='I do not have an account'
      />
      <span>Sign up with your email and password.</span>
      <form onSubmit={ handleSubmit} >
        <FormInput
          type='text'
          name='displayName'
          value={ displayName }
          label='Display Name'
          onChange={  handleChange  }
          required
        />
        <FormInput
          type='email'
          name='email'
          value={ email }
          label='Email'
          onChange={  handleChange  }
          required
        />
        <FormInput
          type='password'
          name='password'
          value={ password }
          label='Password'
          onChange={ handleChange }
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={ confirmPassword }
          label='Confirm Password'
          onChange={ handleChange }
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch( signUpStart( userCredentials ) )
})

export default connect(null, mapDispatchToProps)( SignUp );
