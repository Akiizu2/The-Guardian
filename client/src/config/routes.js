import React from 'react'
import { HomePage, DetailPage } from '../page'

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <HomePage />
  },
  {
    path: '/detail/:id([a-zA-Z-\\0-9]+)',
    component: () => <DetailPage />
  }
]

export default routes