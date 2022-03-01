import React from 'react';

import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  ListContainer,
  Card,
  InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import Modal from '../../Components/Modal';

function Home() {
  return (
    <Container>
      <Modal danger />
      <InputSearchContainer>
        <input type='text' placeholder='pesquisar contato' />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to='/new'>Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type='button'>
            <span>Nome</span>
            <img src={arrow} alt='arrow' />
          </button>
        </header>

        <Card>
          <div className='info'>
            <div className='contact-name'>
              <strong>Lucas Vinicius</strong>
              <small>instagram</small>
            </div>
            <span>lucass.lv.lv@gmail.com</span>
            <span>(89) 99999-9999</span>
          </div>

          <div className='actions'>
            <Link to='/edit/123'>
              <img src={edit} alt='edit' />
            </Link>
            <button type='button'>
              <img src={trash} alt='trash' />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

export default Home;
