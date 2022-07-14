/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';

const min = 'Deve ser maior que ${min}.';
const max = 'Deve ser menor que ${max}.';
const required = 'Campo Obrigatório';

const yupSchema = [
  yup
    .object({
      react: yup.number().min(0, min),
      vue: yup.number().min(0, min),
      angular: yup.number().min(0, min),
      observations: yup.string(),
    })
    .test('angular', null, obj => {
      if (obj.react || obj.angular || obj.vue) {
        return true;
      }

      return new yup.ValidationError(
        'Precisa selecionar no mínimo um adesivo.',
        null,
        'angular',
      );
    })
    .required(required),
  yup
    .object({
      paymentMethod: yup
        .string()
        .oneOf(['creditCard', 'bill', 'pix'])
        .required(required),
    })
    .required(required),
  yup.object({
    cardNumber: yup.string().max(16, max).required(required),
    cvc: yup.string().min(3, min).max(4, max).required(required),
    nameOnCard: yup.string().required(required),
    expiryMonth: yup
      .number()
      .min(new Date().getFullYear(), min)
      .max(12, max)
      .required(required),
    expiryYear: yup
      .number()
      .min(new Date().getFullYear(), min)
      .required(required),
  }),
];

export default yupSchema;
