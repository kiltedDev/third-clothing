import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/horn.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (

  <HeaderContainer  className='header'>
    <LogoContainer className='logo-container' to='/'>
      <Logo className='logo' alt='horn of odin produced by flaticon.com' label='horn of odin produced by flaticon.com'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink
        to='/shop'
        children='Shop'
      />
      <OptionLink
        to='/shop'
        children='Contact'
      />
      {
        currentUser ?
        (
          <OptionLink
            as='div'
            onClick={ () => auth.signOut() }
            children='Sign Out'
          />
        ) : (
          <OptionLink
            to='/signin'
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
})

export default connect( mapStateToProps )(Header);
