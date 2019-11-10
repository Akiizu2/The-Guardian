import React, { memo, useEffect } from 'react'
import * as moment from 'moment'

import { useArticleDetail } from '../../hooks/articleDetail'
import { ArticleDetailPlaceholder } from '../../../../component'

import styles from './articleDetail.module.scss'

function ArticleDetail(props) {
  const { id } = props
  const { data, code, error, isFetching } = useArticleDetail(id)

  useEffect(() => {
    document.title = `The Guardian: ${data.webTitle || 'Loading...'}`
    return () => {
      document.title = 'The Guardian'
    }
  }, [data])


  if (isFetching) {
    return (
      <ArticleDetailPlaceholder />
    )
  }

  if (error && code !== 200) {
    return <div className={styles.something__went_wrong}>:-( Something went wrong!</div>
  }

  return (
    <div className={styles.article_detail__wrapper}>
      <h1 className={styles.article_detail__header}>{data.webTitle}</h1>
      <div className={styles.article_detail__published}>Published: {moment(data.webPublicationDate).format('DD MMMM YYYY HH:mm:ss')}</div>
      {
        data.fields &&
        <div
          className={styles.article_detail__content}
          dangerouslySetInnerHTML={{ __html: data.fields.body }}
        />
      }
    </div>
  )
}

export default memo(ArticleDetail)