import { getArticles } from '../services/article'
import { article } from '../model'

async function getArticle(req, res) {
  const {
    search,
    page,
    page_size,
  } = req.query
  try {
    const params = await article.getArticleRequest.validate({
      ...search ? { q: encodeURIComponent(search) } : {},
      ...page ? { page } : {},
      ...page_size ? { 'page-size': page_size } : {},
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

export default {
  getArticle
}