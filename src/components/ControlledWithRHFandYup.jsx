import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from 'common/FormInput';
import { validateSchema } from '../utils/validateSchema';

const ControlledWithRHFandYup = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(validateSchema) });

  const onFormSubmit = ({ login, password }) => {
    console.log(`ЛОГИН: ${login} ПАРОЛЬ: ${password}`);
    reset();
  };

  return (
    <section>
      <h1>React Hook Form</h1>
      <h3>With YUP Validation</h3>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <FormInput control={control} name="login" type="text" label="Имя пользователя:" />
        <FormInput control={control} name="password" type="password" label="Пароль:" />
        <input type="submit" className="submit_btn" value="Войти" disabled={!isValid} />
      </form>
    </section>
  );
};

export default ControlledWithRHFandYup;
