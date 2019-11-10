import React, { memo, useEffect } from 'react'
import * as moment from 'moment'
import { useArticleDetail } from '../../hooks/articleDetail'

function ArticleDetail(props) {
  const { id } = props
  const { data, code, error, isFetching } = useArticleDetail(id)

  useEffect(() => {
    console.log('data', data)
  }, [data])


  if (isFetching) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{data.webTitle}</h1>
      <div>Published: {moment(data.webPublicationDate).format('DD MMMM YYYY HH:mm:ss')}</div>
      <div>Resource: {data.webUrl}</div>
      {data.fields && <div dangerouslySetInnerHTML={{ __html: data.fields.body }} />}
    </div>
  )
}

export default memo(ArticleDetail)