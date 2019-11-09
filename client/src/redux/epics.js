import { combineEpics } from 'redux-observable'

import articleEpics from './article/epic'

export default combineEpics(
  articleEpics,
)