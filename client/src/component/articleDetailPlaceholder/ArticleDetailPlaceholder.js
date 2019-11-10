import React, { memo } from 'react'

import styles from './articleDetailPlaceholder.module.scss'

function ArticleDetailPlaceholder() {
  return (
    <div className={styles.article_loading__wrapper}>
      <div
        className={styles.article_loading__item}
        style={{ width: '80%', height: '2.5rem' }}
      />
      <div
        className={styles.article_loading__item}
        style={{ width: '30%', height: '2rem' }}
      />
      <div
        className={styles.article_loading__item}
        style={{ width: '50%', height: '2rem', marginTop: '2rem' }}
      />
      <div
        className={styles.article_loading__item}
        style={{ width: '40%', height: '2rem' }}
      />
      <div
        className={styles.article_loading__item}
        style={{ width: '60%', height: '2rem' }}
      />
      <div
        className={styles.article_loading__item}
        style={{ width: '60%', height: '2rem' }}
      />
      <div
        className={styles.article_loading__item}
        style={{ width: '60%', height: '2rem' }}
      />
      <div
        className={styles.article_loading__item}
        style={{ width: '60%', height: '2rem' }}
      />
    </div>
  )
}

export default memo(ArticleDetailPlaceholder)