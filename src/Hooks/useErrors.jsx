import React from 'react';

function useErrors() {
  const [errors, setErros] = React.useState([]);

  function setErrorField({ field, message }) {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErros((prevState) => [...prevState, { field, message }]);
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  function removeError(fieldName) {
    setErros((prevState) => prevState.filter((error) => error.field !== fieldName));
  }

  return {
    errors,
    setErros,
    setErrorField,
    removeError,
    getErrorMessageByFieldName,
  };
}

export default useErrors;
