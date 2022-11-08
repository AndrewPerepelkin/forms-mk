import React from 'react';
import { useForm } from 'react-hook-form';

const ControlledWithRHF = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const onFormSubmit = ({ login, password }) => {
    console.log(`ЛОГИН: ${login} ПАРОЛЬ: ${password}`);
    reset();
  };

  return (
    <section>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label>
          Логин
          <input
            type="text"
            {...register('login', {
              required: 'Обязательное поле',
              minLength: {
                value: 4,
                message: 'Логин должен содержать минимум 4 символа',
              },
            })}
          />
          <p className="error-msg">{errors.login?.message}</p>
        </label>
        <label>
          Пароль
          <input
            type="password"
            {...register('password', {
              required: 'Обязательное поле',
              minLength: {
                value: 8,
                message: 'Пароль должен содержать минимум 8 символов',
              },
              validate: (value) => value !== '12345678' || 'Пароль не должен быть 12345678',
            })}
          />
          <p className="error-msg">{errors.password?.message}</p>
        </label>
        <input type="submit" className="submit_btn" value="Send" />
      </form>
    </section>
  );
};

export default ControlledWithRHF;
