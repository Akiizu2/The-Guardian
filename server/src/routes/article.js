import express from 'express'

import { articleMiddleware } from '../middleware'

const articleRouter = express.Router()

articleRouter.get('/', articleMiddleware.getArticle)

export default articleRouter