import React, {
  memo,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react'

import { Radio } from '../../../../component'
import { useArticleList } from '../../hooks/articleList'

import styles from './articleList.module.scss'

function ArticleList() {

  const [orderBy, setOrderType] = useState('newest')
  const [searchKeyword, setSearchKeyword] = useState('')

  const payload = useMemo(() => ({
    orderBy,
    keyword: searchKeyword,
    page: 1,
    pageSize: 10,
  }), [orderBy, searchKeyword])

  const {
    isFetching,
    data,
    code,
    error,
  } = useArticleList(payload)

  const onKeywordChanged = useCallback((e) => {
    const changingText = e.target.value
    if (changingText !== searchKeyword) {
      setSearchKeyword(e.target.value)
    }
  }, [searchKeyword])

  useEffect(() => {
    console.log('data', data)
  }, [data])

  return (
    <div className={styles.container}>
      <div className={styles.search__wrapper}>
        <input
          type="text"
          placeholder="Search"
          onChange={onKeywordChanged}
        />
      </div>
      <div className={styles.order__wrapper}>
        <Radio
          label="Newest"
          value="newest"
          checked={orderBy === 'newest'}
          onClick={() => setOrderType('newest')}
        />
        <Radio
          label="Oldest"
          value="oldest"
          checked={orderBy === 'oldest'}
          onClick={() => setOrderType('oldest')}
        />
      </div>
      <div className="list__wrapper">
        {
          data.items
            ? data.items.map(item => (
              <div>{item.id}</div>
            ))
            : 'Empty List'
        }
      </div>
    </div>
  )
}

export default memo(ArticleList)