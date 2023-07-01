import axios from 'axios'
const URL = `http://localhost:5000/api/v1/news`

const getNews = async () => {
  try {
    const response = await axios.get(URL)
    return response
  } catch (error) {
    console.log('error: ',error)
  }
}

export default getNews
