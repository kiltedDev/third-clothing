import React from 'react';

import { SignUpContainer, SignUpTitle} from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async ( event ) => {
      event.preventDefault();

      const { displayName, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }

      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserProfileDocument(user, { displayName });

        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch (error) {
        console.error(error);
      }
    };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer className='sign-up'>
        <SignUpTitle
          className='title'
          children='I do not have an account'
        />
        <span>Sign up with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={ displayName }
            label='Display Name'
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            label='Email'
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            label='Password'
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            onChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}

export default SignUp;
