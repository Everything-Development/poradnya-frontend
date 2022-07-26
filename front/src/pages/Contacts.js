import React from 'react'
import backgroung404 from '../assets/404background.png'
import facebook from '../assets/facebook.svg'
import telegram from '../assets/telegram.svg'
import map from '../assets/map.svg'
import '../App.scss';

const ContactsPage = () => {
  return (
    <div className='fadeInDiv'>
    <div class="contacts-background" style={{background: `url(${backgroung404}) center / cover no-repeat`}}>
        <div class="contacts-page">
            <h2 class="contacts-title">Контакти</h2>
            <div class="contacts-content">
                <div class="contacts-content__info">
                    <div class="contacts-content__adress">
                        <div class="contacts-content__title">Адреса</div>
                        <div class="contacts-content__subtitle">м. Львів, вул. І. Свєнціцького, 17</div>
                    </div>
                    <div class="contacts-content__email">
                        <div class="contacts-content__title">Електронна пошта</div>
                        <div class="contacts-content__subtitle">
                            <a href="mailto:consultingcenterucu@gmail.com">consultingcenterucu@gmail.com</a>
                        </div>
                    </div>
                    <div class="contacts-content__media">
                        <div class="contacts-content__title">Соціальні мережі</div>
                        <img src={facebook} alt="poradnya facebook"/><img src={telegram} alt="poradnya telegram"/>
                    </div>
                </div>
                <div class="contacts-content__map">
                    <img src={map} alt="poradnya adress"/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ContactsPage