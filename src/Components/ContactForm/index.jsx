import React from 'react';
import PropTypes from 'prop-types';

import isEmailValid from '../../Utils/EmailValidator';
import useErrors from '../../Hooks/useErrors';

import FormGroup from '../FormGroup';
import Input from '../input';
import Select from '../select';
import Button from '../button';

import { Form, ButtonContainer } from './styles';

function ContactForm({ buttonLabel }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [category, setCategory] = React.useState('');
  const { setErrorField, removeError, getErrorMessageByFieldName } = useErrors();

  function handleChangeName({ target }) {
    setName(target.value);

    if (!target.value) {
      setErrorField({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleChangeEmail({ target }) {
    setEmail(target.value);

    if (target.value && !isEmailValid(target.value)) {
      setErrorField({ field: 'email', message: 'Email inválido' });
    } else {
      removeError('email');
    }
  }

  function handleSubmit() {}

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          type='text'
          placeholder='Nome'
          value={name}
          onChange={handleChangeName}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          type='text'
          placeholder='E-mail'
          value={email}
          onChange={handleChangeEmail}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type='text'
          placeholder='Telefone'
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        >
          <option value=''>Categoria</option>
          <option value='Instagram'>Instagram</option>
          <option value='Discord'>Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type='submit'>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

export default ContactForm;
