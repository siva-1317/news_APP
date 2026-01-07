import React from 'react'

function NewsItem({description, title , content,image, url}) {
  return (
    <div onClick={() => window.open(url, "_blank")}  style={{
        border:"5px solid gray",
        padding:"10px",
       
        cursor:"pointer"
    }}>
        <img src={image || 'https://dummyimage.com/300x180/000/fff&text=news'} alt='newsImage' 
        style={{width:"300px", height:"180px", objectFit: "cover" }}/>

        <h3>{title} </h3>
        <p>{description || "no description"} </p>
        <p>{content || "no content"} </p>
       
        <hr/>
    </div>
  )
}

export default NewsItem