import { ARTICLE_LIST } from './types'
import initialState from './initialState'

const list = (state = initialState, actions) => {
  switch (actions.type) {
    case ARTICLE_LIST.REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case ARTICLE_LIST.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: actions.data,
        code: actions.code,
      }
    case ARTICLE_LIST.FAILURE:
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

export { list }