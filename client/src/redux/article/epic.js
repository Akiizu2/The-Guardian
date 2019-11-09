import { combineEpics } from 'redux-observable'
import { filter, mapTo } from 'rxjs/operators'

const pingEpic = action$ => action$.pipe(
  filter(action => action.type === 'PING'),
  mapTo({ type: 'PONG' })
);

export default combineEpics(
  pingEpic,
)