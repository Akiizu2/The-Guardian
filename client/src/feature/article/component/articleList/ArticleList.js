import React, {
  memo,
  useState,
  useCallback,
  useMemo,
} from 'react'

import { Radio } from '../../../../component'
import { useArticleList } from '../../hooks/articleList'

import styles from './articleList.module.scss'

function ArticleList() {

  const [orderBy, setOrderType] = useState('newest')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [searchKeyword, setSearchKeyword] = useState('')

  const payload = useMemo(() => ({
    orderBy,
    keyword: searchKeyword,
    page,
    pageSize,
  }), [orderBy, searchKeyword, page, pageSize])

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

  const onPageSizeChanged = useCallback((e) => {
    const changePageSize = +e.target.value
    if (changePageSize !== pageSize) {
      setPageSize(changePageSize)
    }
  }, [pageSize])

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
      <div className={styles.pagination__wrapper}>
        <div className={styles.page_field__wrapper}>
          <label htmlFor="page-size">Page Size</label>
          <input type="number" value={pageSize} onChange={onPageSizeChanged} />
        </div>
      </div>
      {isFetching
        ? <div className={styles.loading__wrapper}>Loading...</div>
        : (
          <>
            <div className={styles.pagination__wrapper}>
              <div className={styles.paginator_wrapper}>
                {
                  page - 50 > 0 && (
                    <>
                      <span
                        className={styles.paginator__item}
                        onClick={() => setPage(1)}>1</span>
                      <span className={styles.paginator__item}>...</span>
                    </>
                  )
                }
                {
                  page - 1 > 0 && (
                    <span
                      className={styles.paginator__item}
                      onClick={() => setPage(page - 1)}>{page - 1}</span>
                  )
                }
                <span className={`${styles.paginator__item} ${styles.current}`}>{page}</span>
                {
                  page < data.pages && (
                    <span
                      className={styles.paginator__item}
                      onClick={() => setPage(page + 1)}>{page + 1}</span>
                  )
                }
                {
                  page < data.pages - 1 && (
                    <>
                      <span className={styles.paginator__item}>...</span>
                      <span
                        className={styles.paginator__item}
                        onClick={() => setPage(data.pages)}>{data.pages}</span>
                    </>
                  )
                }
              </div>
            </div>
            <div className={styles.list__wrapper}>
              {
                data.items && (
                  data.items.length < 1
                    ? <div className={styles.not_found__wrapper}> Not found any article :-(  </div>
                    : (
                      data.items.map(item => (
                        <div className={styles.article__items} key={item.id}>{item.webTitle}</div>
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