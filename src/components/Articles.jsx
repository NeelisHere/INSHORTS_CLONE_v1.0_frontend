import React, { useEffect } from 'react'
import getNews from '../service/api'
const Articles = () => {

    useEffect(()=>{
        dailyNews()
    },[])

    const dailyNews = async () => {
        let response = await getNews()
        console.log(response)
    }

    return (
        <div>
        asdf
        </div>
    )
}

export default Articles
