import { combineEpics, ofType } from 'redux-observable'
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators'

import { ARTICLE_LIST } from './types'
import { endpoint } from './api'
import {
  getArticleListSuccess,
  getArticleListFailure
} from './actions'
import { of } from 'rxjs'

const getArticleEpics = (action$, _, { axios$ }) => action$.pipe(
  ofType(ARTICLE_LIST.REQUEST),
  switchMap(action => {
    const { payload } = action
    const { keyword, orderBy, page, pageSize } = payload
    return axios$({
      url: endpoint,
      method: 'get',
      params: {
        search: keyword,
        page,
        page_size: pageSize,
        order_by: orderBy,
      }
    }).pipe(
      map(response => {
        const { data, code } = response.data
        if (code === 200) {
          return getArticleListSuccess(data, code)
        } else {
          return getArticleListFailure(response, code)
        }
      }),
      catchError(error => {
        return of(getArticleListFailure(error, null))
      })
    )

  })
)

export default combineEpics(
  getArticleEpics,
)