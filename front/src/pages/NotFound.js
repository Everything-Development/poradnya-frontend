import React from 'react';
import { Link } from 'react-router-dom';
import backgroung404 from '../assets/404background.png'
import '../App.scss';
const NotFound = () => (
  <div>
     <section class="error-section" style={{background: `url(${backgroung404})`}}>
        <div class="error-section__wrap">
            <h2 class="error-section__title">Ой, щось пішло не так</h2>
            <p class="error-section__subtitle">Сторінка, яку ви шукаєте, не існує. Можливо, вона застраліла, її видалили або була введена неправильна адреса</p>
            <Link to="/"><p class="error-section__button">Повернутись на головну</p></Link>
        </div>
    </section>
  </div>
);

export default NotFound;