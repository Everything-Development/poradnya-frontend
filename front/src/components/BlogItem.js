import React from 'react'
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom'

const BlogItem = ({element}) => {
  return (
    <Link className="blog-article" to={`/article/${element.id}`} >
      <CardActionArea sx={{borderRadius: 'inherit',}}>
        <div className='blog-article-mobile'>
          <img src={element.image} alt="#" className="blog-article__image"/>
          <div className="blog-article__content">
              <div className="article-date">{element.date}</div>
              <h3 className="article-title">{element.title}</h3>
              <p className="article-description">
                  {element.text}
              </p>
          </div>
        </div>
      </CardActionArea>
    </Link>
  )
}

export default BlogItem