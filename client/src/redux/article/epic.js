import { combineEpics } from 'redux-observable'
import listEpics from './list/epic'
import detailEpics from './detail/epic'

export default combineEpics(
  listEpics,
  detailEpics,
)