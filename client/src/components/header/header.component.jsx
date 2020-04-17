import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/horn.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (

  <HeaderContainer  className='header'>
    <LogoContainer className='logo-container' to='/'>
      <Logo className='logo' alt='horn of odin produced by flaticon.com' label='horn of odin produced by flaticon.com'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink
        to='/shop'
        name='Shop'
        children='Shop'
      />
      <OptionLink
        to='/contact'
        name='Contact'
        children='Contact'
      />
      {
        currentUser ?
        (
          <OptionLink
            as='div'
            onClick={ signOutStart }
            name='Sign Out'
            children='Sign Out'
          />
        ) : (
          <OptionLink
            to='/signin'
            name='Sign In'
            children='Sign In'
          />
        )
      }
      <CartIcon />
    </OptionsContainer>
    { hidden ? null : <CartDropdown /> }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch( signOutStart() )
});

export default connect( mapStateToProps, mapDispatchToProps )(Header);
