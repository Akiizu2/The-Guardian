import React, { memo } from 'react'
import { useParams, Link } from 'react-router-dom'

import { ArticleDetail } from '../../feature/article/component'
import styles from './detail.module.scss'

function DetailPage() {
  const { id } = useParams()

  return (
    <div className={styles.container}>
      <div className={styles.menu_wrapper}>
        <Link to="/" className={styles.back_button}>Back to home</Link>
        <div className={styles.logo}>The Guardian</div>
      </div>
      <ArticleDetail id={id} />
    </div>
  )
}

export default memo(DetailPage)