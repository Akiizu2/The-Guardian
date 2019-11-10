import React, { memo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { ArticleDetail } from '../../feature/article/component'

import styles from './detail.module.scss'

function DetailPage() {
  const { id } = useParams()

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>The Guardian</Link>
      <ArticleDetail id={id} />
    </div>
  )
}

export default memo(DetailPage)