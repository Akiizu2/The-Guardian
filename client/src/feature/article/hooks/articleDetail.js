import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getContent } from '../../../redux/article/detail/actions'

export function useArticleDetail(id) {

  const dispatch = useDispatch()
  const {
    isFetching,
    data,
    error,
    code,
  } = useSelector(state => state.article.detail)

  useEffect(() => {
    dispatch(getContent({ id }))
  }, [id, dispatch])

  return {
    isFetching,
    data,
    error,
    code,
  }
}