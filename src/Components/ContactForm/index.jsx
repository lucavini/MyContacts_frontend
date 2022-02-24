import React from 'react';

import PropTypes from 'prop-types';

import FormGroup from '../FormGroup';

import Input from '../input';
import Select from '../select';
import Button from '../button';

import { Form, ButtonContainer } from './styles';

function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input type='text' placeholder='Nome' />
      </FormGroup>

      <FormGroup>
        <Input type='text' placeholder='E-mail' />
      </FormGroup>

      <FormGroup>
        <Input type='text' placeholder='Telefone' />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value='instagram'>Instagram</option>
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
