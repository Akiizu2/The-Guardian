import axios from 'axios'

const API_KEY = '120597d7-d6f4-4926-87ac-af558fc9d4f8'

export async function getArticles(params) {
  try {
    const response = await axios({
      url: 'https://content.guardianapis.com/search',
      method: 'GET',
      params: {
        'api-key': API_KEY,
        ...params
      }
    })
    const {
      pageSize,
      currentPage,
      pages,
      results,
    } = response.data.response

    return {
      pageSize,
      currentPage,
      pages,
      items: results,
    }

  } catch (error) {
    throw {
      code: 400,
      statusText: error.response.statusText,
    }
  }
}