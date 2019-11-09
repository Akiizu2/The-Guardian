import React, { memo } from 'react'

import { ArticleList } from '../../feature/article/component'
import stlyes from './home.module.scss'

function HomePage() {
  return (
    <div className={stlyes.container}>
      <h1 className={stlyes.header}>The Guardian</h1>
      <ArticleList />
    </div>
  )
}

export default memo(HomePage)
