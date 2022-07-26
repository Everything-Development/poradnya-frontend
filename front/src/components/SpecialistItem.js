import React from 'react'

const SpecialistItem = ({specialist}) => {
  return (
    <div className="specialist-item">
        <img src={specialist.image} alt="specialist" className="specialist-item-photo"/>
        <div className="specialist-item-about">
            <h3 className="specialist-item-about__title">{specialist.name}</h3>
            <p className="specialist-item-about__description">{specialist.description}</p>
        </div>
    </div> 
  )
}

export default SpecialistItem