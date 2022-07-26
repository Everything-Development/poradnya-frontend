import React from 'react'
import quotes_svg from '../assets/quotes.svg'
// import background_landing from '../assets/background_landing.png'
import SpecialistItem from '../components/SpecialistItem'
import Footer from '../components/Footer'

import image from '../assets/image.png'
import image1 from '../assets/image-1.png'
import image2 from '../assets/image-2.png'
import image3 from '../assets/image-3.png'

import { Link } from 'react-router-dom'

import HomeButton from '../components/HomeButton'
import HomeButtonLink from '../components/HomeButtonLink'
import background_landing from '../assets/background_landing.png'
import Header from '../components/Header'
import '../App.scss';


let specialists = [
    {
        'image': image,
        'name': 'Кечур Роман',
        'description': 'Керівник програми “Психологія” Українського Католицького Університету.'
    },
    {
        'image': image1,
        'name': 'Семків Ірина',
        'description': 'Керівник магістерської програми "Психологія з основами психодинамічної терапії" '
    },
    {
        'image': image2,
        'name': 'Пелех Ірина',
        'description': 'Керівник напряму роботи "Порадні" в Львівському обласному клінічному психоневрологічному диспансері'
    },
    {
        'image': image3,
        'name': 'Тимків Тетяна',
        'description': 'Адміністратор центру, керівник напряму “Психологічні групи для студентів УКУ” в рамках програми “Порадні”'
    }
]

const HomePage = () => {


    const FingPsychologist = () => {
        return (
            <section className="find_psychologist-section">
                <h2 className="find_psychologist-section__title">Шукайте психолога біля Вас</h2>
                <p className="find_psychologist-section__subtitle">заповнивши коротеньку форму реєстрації</p>
                <Link to='consult_form' style={{textDecoration: 'none'}}><HomeButton text='Шукати консультаційний центр'/></Link>
            </section>
        )
    }



  return (
      <div className='fadeInDiv'>
    <section className="hero">
        <div className="hero-top" style={{ 
            backgroundImage : `url(${background_landing})`,
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center',
            backgroundSize: 'cover'
            }}>
            <h1 className="hero-title"><span>Психолог</span> – це не страшно</h1>
            <h2 className="hero-subtitle">Отримай 10 безкоштовних консультацій та відкрий для себе їх користь</h2>
            {/* <a href="#" className="hero-button">Записатися на консультацію</a> */}
            <HomeButtonLink text='Записатися на консультацію'/>
        </div>
        <div className="hero-bottom">
            <div className="quotes"><img src={quotes_svg} alt="#"/></div>
            <div className="quote-text">Ми – науково-консультаційний центр, наша діляьність здійснюється виключно на
                безоплатній основі в межах 10 сесій під супервізією</div>
        </div>
    </section>
    <h1 className='specialist-section-title'>Наші спеціалісти</h1>
    <section className='specialists-section'>
        {specialists?.map((specialist, index) => (
            <SpecialistItem key={index} specialist={specialist}/>
        ))}
    </section>
    <FingPsychologist/>
    <Footer/>
    </div>
    

    
  )
}

export default HomePage