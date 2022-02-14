import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/images/Logo.svg';

function Header() {
  return (
    <Container>
      <img src={Logo} alt='logo' />
    </Container>
  );
}

export default Header;
