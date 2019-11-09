import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getArticleList } from '../../../redux/article/list/actions'

export function useArticleList(payload) {
  const {
    orderBy,
    keyword,
    page,
    pageSize,
  } = payload

  const dispatch = useDispatch()
  const {
    isFetching,
    data,
    error,
    code,
  } = useSelector(state => state.article.list)

  useEffect(() => {
    dispatch(getArticleList({ orderBy, keyword, page, pageSize }))
  }, [orderBy, keyword, page, pageSize, dispatch])

  return {
    isFetching,
    data,
    error,
    code,
  }
}