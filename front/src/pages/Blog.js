import React from 'react'
import image_blog1 from '../assets/image_blog1.png'
import BlogItem from '../components/BlogItem'
import test_img from '../assets/unsplash_FV3GConVSss.png'
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import '../App.scss';

let articles = [
    {
        'id': 0,
        'image': test_img,
        'date': '14 березня 2022',
        'title': 'Особливості емоційного розвитку дітей дошкільного віку',
        'text': 'Дошкільний вік – це первинний етап соціалізації в житті дитини. в цей період дитина залучаєтсья до загальнолюдських ціннотей, встановлює перші взаємини з людьми, в неї бурхливо розвивається емоційна сфера...',
    },
    {
        'id': 2,
        'image': image_blog1,
        'date': '14 березня 2022',
        'title': 'Заголовок статті',
        'text': 'Текст статті',
    },
    {
        'id': 3,
        'image': image_blog1,
        'date': '14 березня 2022',
        'title': 'Заголовок статті',
        'text': 'Текст статті',
    },
    {
        'id': 4,
        'image': image_blog1,
        'date': '14 березня 2022',
        'title': 'Заголовок статті',
        'text': 'Текст статті',
    },
    {
        'id': 5,
        'image': image_blog1,
        'date': '14 березня 2022',
        'title': 'Заголовок статті',
        'text': 'Текст статті',
    }
]

const BlogPage = () => {
  return (
      
    <div className='fadeInDiv'>
    <div className="blog-wrap">
    <div style={{height:'200px'}}></div>

    <h2 className="blog-title">Блог</h2>
    <div className="recent-article">
        
        <img src={articles[0].image} alt="#" className="recent-article__image"/>
        <div className="recent-article__content">
            <div className="recent-article__date">{articles[0].date}</div>
            <h3 className="recent-article__title">{articles[0].title}</h3>
            <p className="recent-article__description">
                {articles[0].text}<Link style={{'text-decoration': 'none'}} to={`/article/${articles[0].id}`} ><span style={{ width: '150px', fontSize: '30px'}}><CardActionArea sx={{height:'40px', textAlign: 'center', fontSize:'18px',borderRadius: '8px'}}>Читати далі</CardActionArea></span></Link>
            </p>

        </div>
    </div>

    <h3 className="articles-title">Наші статті</h3>

    <div className="articles-container">
            {articles.slice(1)?.map((element, index) => (
                <BlogItem key={index} element={element}/>
            ))}
    </div>
</div>
</div>
  )
}

export default BlogPage