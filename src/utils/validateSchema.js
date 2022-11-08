import * as yup from 'yup';

export const validateSchema = yup.object().shape({
  login: yup
    .string()
    .required('Это поле обязательное для заполнения')
    .min(4, 'Логин должен состоять минимум из 4 символов'),
  password: yup
    .string()
    .required('Это поле обязательное для заполнения')
    .min(8, 'Пароль должен состоять минимум из 8 символов')
    .test('PASSWORD', 'Нельзя задать пароль 12345678', (value) => value !== '12345678'),
});
