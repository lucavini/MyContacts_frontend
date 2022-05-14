import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import { Overlay, Container, Footer } from './styles';

import Button from '../button';

function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo do modal</h1>
        <p>Corpo</p>
        <Footer>
          <button type='button' className='cancel-button'>
            Cancelar
          </button>
          <Button danger={danger} type='button'>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};

export default Modal;
