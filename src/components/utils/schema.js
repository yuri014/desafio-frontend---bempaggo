import * as yup from 'yup';

const yupSchema = [
  yup
    .object({
      react: yup.number().min(0),
      angular: yup.number().min(0),
      vue: yup.number().min(0),
      observations: yup.string(),
    })
    .test('is-one-selected', null, obj => {
      if (obj.react || obj.angular || obj.vue) {
        return true;
      }

      return new yup.ValidationError(null, null, 'is-one-selected');
    })
    .required(),
  yup.string().oneOf(['creditCard', 'bill', 'pix']).required(),
  yup
    .object()
    .optional()
    .when('paymentMethod', {
      is: paymentMethod => paymentMethod === 'creditCard',
      then: yup.object({
        cardNumber: yup.string().max(16).required(),
        cvc: yup.string().min(3).max(4).required(),
        nameOnCard: yup.string().required(),
        expiryMonth: yup
          .number()
          .min(new Date().getFullYear())
          .max(12)
          .required(),
        expiryYear: yup.number().min(new Date().getFullYear()).required(),
      }),
    }),
];

export default yupSchema;
