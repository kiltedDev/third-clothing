import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


import { googleSignInStart } from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  SignInButtonsContainer
} from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword( email, password );
      this.setState({
        email: '',
        password: ''
      })
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <SignInContainer className='sign-in'>
        <SignInTitle
          children='I already have an account'
          />
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'

            />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch( googleSignInStart() )
})

export default connect( null, mapDispatchToProps )( SignIn );
