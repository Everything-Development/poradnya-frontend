import React from 'react'
import smile from '../assets/smile.svg'
import clipboard from '../assets/clipboard.svg'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../App.scss';

const AboutUsPage = () => {
  return (
      <>
      <Header/>
    <div className='fadeInDiv'>
        <br/>
        <br/>
        <br/>
        <br/>
          <section class="about_us-section">
        <div class="about_us-section__info">
            <h3 class="about_us-section__title">Хто ми?</h3>
            <p class="about_us-section__description">Ми – науково-консультаційний центр, наша діляьність здійснюється
                виключно на безоплатній основі в межах 10 сесій під супервізією
            </p>
        </div>

        <div class="about_us-benefits">
            <div class="about_us-benefits__item">
                <img src={smile} alt="happy clients" class="benefits-item__icon"/>
                <div class="benefits-item__number">500+</div>
                <div class="benefits-item__description">клієнтів прийнято</div>
            </div>

            <div class="about_us-benefits__item">
                <img src={clipboard} alt="happy clients" class="benefits-item__icon"/>
                <div class="benefits-item__number">5000+</div>
                <div class="benefits-item__description">консультацій проведено</div>
            </div>

            <div class="about_us-benefits__item">
                <img src={smile} alt="happy clients" class="benefits-item__icon"/>
                <div class="benefits-item__number">30+</div>
                <div class="benefits-item__description">консультантів залучено</div>
            </div>
        </div>

        <div class="about_us-section__info">
            <h3 class="about_us-section__title">В яких напрямках ми працюємо?</h3>
            <p class="about_us-section__description">Ми працюємо в таких напрямках, як Психоаналіз, Гештальт,
                Кататимно-імагінативний, Терапія Орієнтована на особистості та Тілесно Орієнтований
            </p>
        </div>
    </section>
    <Footer/>
    </div>
    </>
  )
}

export default AboutUsPage