import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const News = ({category}) => {

    const [articles, setArticles]= useState([])

    useEffect( () =>{
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7bb091b43b6642ada4ac57fa0fa3a784`)
        .then(res => res.json())
        .then(data => {
            setArticles(data.articles || []);
        });
    },[category]);
  return (
    <div>
        <h1 style={{textTransform:"capitalize"}}>{category} News Ready</h1>
        <hr/>
        <div style={{display:"grid",
        gridTemplateColumns:"repeat(4, 1fr)",
        gap: "15px",
        padding:"40px"
        }}>
{/* 
        {articles.map((news, index) => (
            <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                image={news.urlToImage}
                url={news.url}
                content={news.content}
            />
           

        ))

        } */}
         {articles.map((news, index) => (
            <Cards
                key={index}
                title={news.title}
                description={news.description}
                image={news.urlToImage}
                url={news.url}
                content={news.content}
            />
           

        ))

        }


        </div>
    </div>
  )
}

export default News