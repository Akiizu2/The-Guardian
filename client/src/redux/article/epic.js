import { combineEpics } from 'redux-observable'
import listEpics from './list/epic'

export default combineEpics(
  listEpics,
)