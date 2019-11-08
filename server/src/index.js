import express from 'express'

import { articleRoutes } from './routes'

const app = express()
const port = 3000

app.use('/articles', articleRoutes)

app.listen(port, () => {
  console.log(`Started with port ${port}`)
})