import React from 'react';
import './header.menu.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link to={'/'} className='logo-container'>
        <Logo className='logo' />
      </Link>

      <div className='options'>
        <Link to={'/tests'} className='option'>
          Teste
        </Link>

        <Link to={'/contact'} className='option'>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
