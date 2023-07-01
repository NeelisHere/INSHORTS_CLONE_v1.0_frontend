import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import Article from './Article'
import getNews from '../service/api'

const Articles = () => {
    const [news, setNews] = useState([])
    useEffect(()=>{
        dailyNews()
    },[])

    const dailyNews = async () => {
        let response = await getNews()
        // console.log(response)
        setNews(response.data)
    }

    return (
        <div>
            {
                news.map((data) => {
                    return(
                        <Article key={v4()} data={data}/>
                    )
                })
            }
        </div>
    )
}

export default Articles
