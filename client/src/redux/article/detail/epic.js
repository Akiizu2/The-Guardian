import { combineEpics, ofType } from 'redux-observable'
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators'

import { ARTICLE_DETAIL } from './types'
import { endpoint } from './api'
import {
  getContentSuccess,
  getContentFailure,
} from './actions'
import { of } from 'rxjs'

const getArticleContentEpics = (action$, _, { axios$ }) => action$.pipe(
  ofType(ARTICLE_DETAIL.REQUEST),
  switchMap(action => {
    const { payload } = action
    const { id } = payload
    return axios$({
      url: `${endpoint}/${id}`,
      method: 'get',
    }).pipe(
      map(response => {
        const { data, code } = response.data
        if (code === 200) {
          return getContentSuccess(data, code)
        } else {
          return getContentFailure(response, code)
        }
      }),
      catchError(error => {
        return of(getContentFailure(error, null))
      })
    )

  })
)

export default combineEpics(
  getArticleContentEpics,
)