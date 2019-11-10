import { ARTICLE_DETAIL } from './types'

export const getContent = (payload) => ({
  type: ARTICLE_DETAIL.REQUEST,
  payload,
})

export const getContentSuccess = (data, code) => ({
  type: ARTICLE_DETAIL.SUCCESS,
  data,
  code,
})

export const getContentFailure = (error, code) => ({
  type: ARTICLE_DETAIL.FAILURE,
  error,
  code,
})