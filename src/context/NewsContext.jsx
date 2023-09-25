import axios from "axios"
import { createContext, useEffect, useState } from "react"

const NewsContext = createContext()

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState('general')
  const [country, setCountry] = useState('us')
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalNews, setTotalNews] = useState(0)

  const handleCategory = e => {
    setCategory(e.target.value)
  }

  const handleCountry = e => {
    setCountry(e.target.value)
  }

  const handlePageChange = (e, value) => {
    setPage(value)
  }

  useEffect(() => {
    const handleNews = async e => {
      setLoading(true)
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios(url)
      console.log(data)
      setLoading(false)
      setNews(data.articles)
      setTotalNews(data.totalResults)
      setPage(1)
    }
    handleNews()
  }, [category, country])

  useEffect(() => {
    const handleNews = async e => {
      setLoading(true)
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios(url)
      console.log(data)
      setLoading(false)
      setNews(data.articles)
      setTotalNews(data.totalResults)
    }
    handleNews()
  }, [page])

  return (
    <NewsContext.Provider
      value={{
        category,
        handleCategory,
        country,
        handleCountry,
        news,
        loading,
        totalNews,
        page,
        handlePageChange
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}

export { NewsContext }
export default NewsProvider
