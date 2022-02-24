import React from 'react';

import PageHeader from '../../Components/PageHeader';
import ContactForm from '../../Components/ContactForm';

function NewContact() {
  return (
    <>
      <PageHeader title='Novo contato' />

      <ContactForm buttonLabel='Cadastrar' />
    </>
  );
}

export default NewContact;
