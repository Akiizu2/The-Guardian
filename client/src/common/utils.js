import axios from 'axios'
import { Observable } from 'rxjs'

export const axios$ = options => new Observable((subscriber) => {
  axios(options)
    .then(response => subscriber.next(response))
    .catch(error => subscriber.error(error))
})

export const generateTypes = (key) => ({
  REQUEST: `${key}_REQUEST`,
  SUCCESS: `${key}_SUCCESS`,
  FAILURE: `${key}_FAILURE`,
  CANCEL: `${key}_CANCEL`,
})