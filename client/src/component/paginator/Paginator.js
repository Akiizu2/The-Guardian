import React, { memo } from 'react'
import PropTypes from 'prop-types'

import styles from './paginator.module.scss'

function Paginator(props) {
  const { page, onChanged, totalPage } = props
  return (
    <div className={styles.paginator_wrapper}>
      {
        page - 3 > 0 && (
          <>
            <span
              className={styles.paginator__item}
              onClick={() => onChanged(1)}>1</span>
            <span className={styles.paginator__item}>...</span>
          </>
        )
      }
      {
        page - 1 > 0 && (
          <span
            className={styles.paginator__item}
            onClick={() => onChanged(page - 1)}>{page - 1}</span>
        )
      }
      <span className={`${styles.paginator__item} ${styles.current}`}>{page}</span>
      {
        page < totalPage && (
          <span
            className={styles.paginator__item}
            onClick={() => onChanged(page + 1)}>{page + 1}</span>
        )
      }
      {
        page < totalPage - 1 && (
          <>
            <span className={styles.paginator__item}>...</span>
            <span
              className={styles.paginator__item}
              onClick={() => onChanged(totalPage)}>{totalPage}</span>
          </>
        )
      }
    </div>
  )
}

Paginator.defaultProps = {
  page: 1,
  onChanged() { },
  totalPage: 10,
}

Paginator.propTypes = {
  page: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  onChanged: PropTypes.func.isRequired,
}

export default memo(Paginator)