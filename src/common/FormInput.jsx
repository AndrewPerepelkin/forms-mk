import React from 'react';
import { Controller } from 'react-hook-form';
import '../styles.scss';

const FormInput = ({ control, label, name, type }) => (
  <label>
    {label}
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value = '' }, fieldState: { error } }) => (
        <>
          <input type={type} value={value} onChange={onChange} />
          <p className="error-msg">{error?.message}</p>
        </>
      )}
    />
  </label>
);

export default FormInput;
