import * as React from 'react'
import phone_icon from '../assets/phone_icon.svg'
import mail_icon from '../assets/mail_icon.svg'
import earth_icon from '../assets/earth_icon.svg'

import unsplash_luseu9GtYzM from '../assets/unsplash_luseu9GtYzM.png'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';




const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '0px solid #dadde9',
      borderRadius: '16px',
      boxShadow: '0px 5px 15px rgba(129, 129, 129, 0.2)'
    },
  }));

  const tags_json = [
    {
      id: 1,
      name: 'Стосунки'
    },
    {
      id: 2,
      name: 'Сімейні стосунки'
    },
    {
      id: 3,
      name: 'Депресія і апатія'
    },
    {
      id: 4,
      name: 'Тривога'
    },
    {
      id: 5,
      name: 'Особиста криза'
    },
    {
      id: 6,
      name: 'Травма'
    },
    {
      id: 7,
      name: 'Харчові розлади'
    },
    {
      id: 8,
      name: 'Горе і втрата'
    }
  ];


const CenterItem = ({center}) => {
    let tags_arr = []
    for (let item in center.tags){
        for (let id_tag in tags_json){
            if (center.tags[item] === tags_json[id_tag].id){
                tags_arr.push(tags_json[id_tag].name)
            }
        }
    }
    console.log(tags_arr)
  return (
    <div className="card-center">
        <img src={center.photo} style={{height: '200px', width: '384px', borderTopLeftRadius: '20px',  borderTopRightRadius: '20px', objectFit: 'cover'}} alt="Шпиталь Шептицького" className="card-image"/>
        <div className="card-content">
            <h3 className="card-title"><p>{center.title}</p>{center.website &&<a href={center.website}><img src={earth_icon} alt="#"/></a>}</h3>
            <div className="card-adress">{center.is_online ? 'online' : <p> - {center.address}</p> }</div>
            <div className="card-phone">
                <img src={phone_icon} alt="#" className="card-phone__icon"/><a href="tel:+380322352266" className="card-phone__number">{center.phone && <>{ center.phone }</>}</a>
            </div>
            <div className="card-email">
                <img src={mail_icon} alt="#" className="card-email__icon"/><a href="mailto:example@gmail.com" className="card-email__adress">{center.email && <>{ center.email }</>}</a>
            </div>
            <div className="services">
                <div className="services-item">{tags_arr[0] && <>{tags_arr[0]}</>}</div>
                {tags_arr[1] && <div className="services-item">{tags_arr[1]}</div>}
                {tags_arr[2] && 
                <HtmlTooltip
                    title={
                    <React.Fragment>
                        <div style={{'display':'flex', 'flex-direction': 'column', 'gap': '10px', 'margin-bottom': '10px', 'margin-top': '10px'}}>
                            {tags_arr &&
                                <>
                                    {tags_arr.slice(2)?.map((tag, index) => (
                                        <div className="services-item" style={{textAlign:'center'}}>{tag}</div>
                                    ))}
                                </>
                            }
                        </div>
                    </React.Fragment>
                    }
                    >
                        <div className="services-item more" style={{cursor: 'pointer'}}>+{center.tags.length-2}</div> 
                    </HtmlTooltip>
                }
            </div>
        </div>
    </div>
  )
}

export default CenterItem