import React from 'react'
import mail from '../assets/mail-24px.svg'
import facebook from '../assets/facebook.svg'
import telegram from '../assets/telegram.svg'
import logo_svg from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <img src={logo_svg} alt="Порадня" className="footer-logo"/>
            <div className="contacts">
                <h4 className="footer-content__title">Зв’язатися з нами</h4>
                <div className="email">
                    <img src={mail} alt="#"/>
                    <a href="mailto:consultingcenterucu@gmail.com">consultingcenterucu@gmail.com</a>
                </div>
                <div className="email">
                    <img src={facebook} alt="#"/>
                    <a href="https://www.instagram.com/poradnya1">@poradnya1</a>
                </div>
                <div className="email">
                    <img src={telegram} alt="#"/>
                    <a href="https://facebook.com/consultingcenterucu">facebook.com/consultingcenterucu</a>
                </div>
            </div>
            <div className="schedule">
                <h4 className="footer-content__title">Робочі години</h4>
                <div className="schedule-day">Понеділок-Субота: <span className="bold">12:00-20:00</span></div>
                <div className="schedule-day">Неділя: <span className="bold">Закритий</span></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer