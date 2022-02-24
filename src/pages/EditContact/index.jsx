import React from 'react';

import ContactForm from '../../Components/ContactForm';
import PageHeader from '../../Components/PageHeader';

function EditContact() {
  return (
    <>
      <PageHeader title='Editar Lucas Vinícius' />

      <ContactForm buttonLabel='Salvar alterações' />
    </>
  );
}

export default EditContact;
