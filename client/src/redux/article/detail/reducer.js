import { ARTICLE_DETAIL } from './types'
import initialState from './initialState'

const detail = (state = initialState, actions) => {
  switch (actions.type) {
    case ARTICLE_DETAIL.REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case ARTICLE_DETAIL.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: actions.data,
        code: actions.code,
      }
    case ARTICLE_DETAIL.FAILURE:
      return {
        ...state,
        isFetching: false,
        error: actions.error,
        code: actions.code,
      }
    default:
      return state
  }
}

export { detail }