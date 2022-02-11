import React from 'react';

import { Container, InputSearchContainer } from './styles';

import Logo from '../../assets/images/Logo.svg';

function Header() {
  return (
    <Container>
      <img src={Logo} alt='logo' />

      <InputSearchContainer>
        <input type='text' placeholder='pesquisar contato' />
      </InputSearchContainer>
    </Container>
  );
}

export default Header;
