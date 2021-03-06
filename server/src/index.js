import express from 'express'

import { articleRoutes } from './routes'

const app = express()
const port = 3002

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  return next()
})

app.use('/article', articleRoutes)

app.listen(port, () => {
  console.log(`Started with port ${port}`)
})