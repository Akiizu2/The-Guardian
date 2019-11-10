import { getArticles, getContent } from '../services/article'
import { article } from '../model'

async function getArticle(req, res) {
  const {
    search,
    page,
    page_size,
    order_by,
  } = req.query
  try {
    const params = await article.getArticleRequest.validate({
      ...search ? { q: encodeURIComponent(search) } : {},
      ...page ? { page } : {},
      ...page_size ? { 'page-size': page_size } : {},
      ...order_by ? { 'order-by': order_by } : {},
    })
    const data = await getArticles(params)

    res
      .status(200)
      .send({
        data,
        code: 200,
      })
  } catch (error) {

    res
      .status(400)
      .send({
        code: 400,
        message: error.message
      })
  }
}

async function getContentByArticleID(req, res) {
  const { id } = req.params
  try {
    const content = await getContent(id)
    res
      .status(200)
      .send({
        data: content,
        code: 200,
      })
  } catch (error) {
    res
      .status(error.code)
      .send({
        code: error.code,
        message: error.statusText
      })
  }
}

export default {
  getArticle,
  getContentByArticleID,
}