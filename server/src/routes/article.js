import express from 'express'

import { articleMiddleware } from '../middleware'

const articleRouter = express.Router()

articleRouter.get('/', articleMiddleware.getArticle)
articleRouter.get('/:id([a-zA-Z\-\\0-9]+)', articleMiddleware.getContentByArticleID)

export default articleRouter