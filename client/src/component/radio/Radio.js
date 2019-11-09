import React, { memo } from 'react'
import PropTypes from 'prop-types'

import styles from './radio.module.scss'

function Radio(props) {
  const {
    label,
    value,
    checked,
    onClick,
  } = props
  return (
    <div className={styles.radio__wrapper}>
      <input
        type="radio"
        id={label}
        value={value}
        checked={checked}
        onChange={onClick}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

Radio.defaultProps = {
  label: '',
  value: '',
  onClick() { },
  checked: false,
}

Radio.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
}

export default memo(Radio)