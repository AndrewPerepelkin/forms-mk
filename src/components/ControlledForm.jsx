import React, { useState } from 'react';
import '../styles.scss';

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    values: {
      login: '',
      password: '',
    },
    errors: {
      login: '',
      password: '',
    },
  });

  const isAnyErrors = (errorsObj) => Boolean(Object.values(errorsObj).filter((v) => v).length);

  const validateInput = (name, value) => {
    switch (name) {
      case 'login':
        return value.length < 4 ? 'Логин должен содержать не менее 4 символов' : '';

      case 'password':
        return value.length < 6 ? 'Пароль должен содержать не менее 6 символов' : '';

      default:
        return '';
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const validateMessages = {
      login: validateInput('login', formData.values.login),
      password: validateInput('password', formData.values.password),
    };

    setFormData((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        login: validateMessages.login,
        password: validateMessages.password,
      },
    }));

    if (!isAnyErrors(validateMessages)) {
      // console.log(`ЛОГИН: ${formData.values.login} ПАРОЛЬ: ${formData.values.password}`);
    }
  };
  const handleInputChange = ({ target }) => {
    setFormData((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [target.name]: target.value,
      },
      errors: {
        ...prevState.errors,
        [target.name]: validateInput(target.name, target.value),
      },
    }));
  };
  return (
    <section>
      <h1>Контроллируемая форма</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Логин
          <input type="text" name="login" value={formData.login} onChange={handleInputChange} />
          <p className="error-msg">{formData.errors.login}</p>
        </label>
        <label>
          Пароль
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <p className="error-msg">{formData.errors.password}</p>
        </label>
        <input type="submit" className="submit_btn" disabled={isAnyErrors(formData.errors)} />
      </form>
    </section>
  );
};
export default ControlledForm;
