import * as yup from 'yup'

export const getArticleRequest = yup.object().shape({
  q: yup.string()
    .typeError('search must be strings.'),
  page: yup.number()
    .positive()
    .typeError('page must be an integer'),
  'page-size': yup.number()
    .positive()
    .typeError('page_size must be an integer'),
  'order-by': yup.string()
    .oneOf(
      ['newest', 'oldest'],
      `order-by must be 'newest' or 'oldest'`
    )
})