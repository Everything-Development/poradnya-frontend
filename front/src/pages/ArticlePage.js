import React from 'react'
import articleimage from '../assets/article-image.png'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../App.scss';


const ArticlePage = () => {
  return (
    <div className='fadeInDiv'>

    <div class="article">
        <div class="article-overlay">
            <img src={articleimage} alt="Особливості емоційного розвитку дітей дошкільного віку"
                class="article-image"/>
        </div>
        <div class="article-content">
            <span class="article-content__date">14 березня 2022</span>
            <h2 class="article-content__title">Особливості емоційного розвитку дітей дошкільного віку</h2>
            <p class="article-content__text">
                Дошкільний вік – це первинний етап соціалізації в житті дитини. в цей період дитина залучаєтсья до
                загальнолюдських ціннотей, встановлює перші взаємини з людьми, в неї бурхливо розвивається емоційна
                сфера
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam accusamus veniam fugiat vero, vitae, mollitia error sequi blanditiis consectetur eos molestiae odio quo, nam amet distinctio impedit maxime saepe doloribus doloremque a ex at dolorum velit neque. Fuga magni officia sequi dolor tenetur maiores suscipit fugit, voluptatum praesentium aut amet expedita ipsum, dolorem ad earum optio! Cum odio tempore assumenda. Sit quidem iste ipsum voluptate consectetur in enim, ipsam quae, ad eum esse? Esse distinctio animi aperiam blanditiis quos. Nam pariatur minima animi tenetur voluptate! Quas voluptatem eum esse sed cumque. Atque error nihil, culpa impedit, maxime eos facere delectus quia nam consequatur reprehenderit voluptas nesciunt at corrupti, itaque molestiae fugiat velit cupiditate a laudantium nobis temporibus optio? Veritatis vero tempora reiciendis amet quod, possimus asperiores assumenda temporibus accusamus in perferendis reprehenderit, illo dolorem quibusdam mollitia nihil placeat inventore molestiae deserunt esse doloribus molestias voluptatem incidunt. Laboriosam ut iure repellendus fuga obcaecati vel labore aperiam? Eaque sapiente quidem illum molestias animi aut reiciendis, eveniet officiis commodi harum quod, totam laudantium alias provident facilis in autem quia modi ut eligendi esse officia culpa labore? Dolorem vitae distinctio id quidem dignissimos perspiciatis cumque officia! Ipsam, adipisci. Possimus aliquam explicabo in dolorem reprehenderit.
            </p>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ArticlePage