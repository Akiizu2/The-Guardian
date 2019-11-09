import { ARTICLE_LIST } from './types'

export const getArticleList = (payload) => ({
  type: ARTICLE_LIST.REQUEST,
  payload,
})

export const getArticleListSuccess = (data, code) => ({
  type: ARTICLE_LIST.SUCCESS,
  data,
  code,
})

export const getArticleListFailure = (error, code) => ({
  type: ARTICLE_LIST.FAILURE,
  error,
  code,
})