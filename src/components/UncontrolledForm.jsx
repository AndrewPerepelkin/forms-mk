import React, { useRef } from 'react';
import '../styles.scss';

const UncontrolledForm = () => {
  const loginRef = useRef();
  const passwordRef = useRef();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // alert(`ЛОГИН: ${loginRef.current.value} ПАРОЛЬ: ${passwordRef.current.value}`);
  };
  return (
    <section>
      <h1>Неконтроллируемая форма</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Логин
          <input type="text" ref={loginRef} />
        </label>
        <label>
          Пароль
          <input type="text" ref={passwordRef} />
        </label>
        <input type="submit" className="submit_btn" />
      </form>
    </section>
  );
};
export default UncontrolledForm;
