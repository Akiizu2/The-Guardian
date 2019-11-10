import React, {
  memo,
  useState,
  useCallback,
  useMemo,
} from 'react'
import { Link } from 'react-router-dom'

import { Radio, Paginator } from '../../../../component'
import { useArticleList } from '../../hooks/articleList'

import styles from './articleList.module.scss'

function ArticleList() {

  const [orderBy, setOrderType] = useState('newest')
  const [page, setPage] = useState(1)
  const [searchKeyword, setSearchKeyword] = useState('')

  const payload = useMemo(() => ({
    orderBy,
    keyword: searchKeyword,
    page,
    pageSize: 100,
  }), [orderBy, searchKeyword, page])

  const {
    isFetching,
    data,
  } = useArticleList(payload)

  const onKeywordChanged = useCallback((e) => {
    const changingText = e.target.value
    if (changingText !== searchKeyword) {
      setSearchKeyword(e.target.value)
    }
  }, [searchKeyword])

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
      {isFetching
        ? <div className={styles.loading__wrapper}>Loading...</div>
        : (
          <>
            <div className={styles.pagination__wrapper}>
              <Paginator
                page={page}
                totalPage={data.pages}
                onChanged={setPage}
              />
            </div>
            <div className={styles.list__wrapper}>
              {
                data.items && (
                  data.items.length < 1
                    ? <div className={styles.not_found__wrapper}> Not found any article :-(  </div>
                    : (
                      data.items.map(item => (
                        <Link
                          to={`/detail/${item.id}`}
                          className={styles.article__items}
                          key={item.id}
                        >
                          {item.webTitle}
                        </Link>
                      ))
                    )
                )
              }
            </div>
          </>
        )
      }
    </div>
  )
}

export default memo(ArticleList)