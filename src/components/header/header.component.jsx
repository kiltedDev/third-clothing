import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/horn.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' alt='horn of odin produced by flaticon.com' label='horn of odin produced by flaticon.com'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/shop'>Contact</Link>
    </div>
  </div>
)

export default Header;
