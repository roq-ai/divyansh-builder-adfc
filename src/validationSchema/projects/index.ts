import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  company_id: yup.string().nullable(),
  client_id: yup.string().nullable(),
});
