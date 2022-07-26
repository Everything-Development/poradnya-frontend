import { useEffect, useState } from 'react'
import * as React from 'react'
import image_centers from '../assets/image_centers.png'
import '../Centers.scss';
import CenterItem from '../components/CenterItem'
import {useLocation} from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { makeStyles } from '@mui/styles';
import Footer from '../components/Footer'

import '../App.scss';



const useStyles = makeStyles(() => ({
    root: {
        "& .MuiLinearProgress-colorPrimary": {
            backgroundColor: "#FFF8EA",
        },
        "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#E6B751",
        },
    },
}))



  


const CentersPage = () => {
    let [centers, setCenters] = useState([])
    const location = useLocation()
    const problem = new URLSearchParams(decodeURIComponent(location.search)).get('problem');
    const region = new URLSearchParams(decodeURIComponent(location.search)).get('region');
    let [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetch_centers = async () => {
            let response = {}
            if (problem === null && region === null){
                response = await fetch('https://poradnya-web.herokuapp.com/api/get_all_consulting_centers/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                })
            } else {
                response = await fetch('https://poradnya-web.herokuapp.com/api/filtered_centers/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body:JSON.stringify({
                        'region': region,
                        'problem': problem,
                    })
                })
            }
            let data = await response.json()  
            setCenters(data)
            setLoading(false)
            console.log('data', data)
        }
        fetch_centers()
    }, [problem, region])


    const classes = useStyles();
  return (
    <div className='fadeInDiv' >
        

    <div className="hero-centers">
        <img src={image_centers} alt="poradnya" className="hero-image"/>
    </div>
    {loading &&
        <div className={classes.root}>
            <LinearProgress sx={{color: (theme) => ('#ffffff')}}/>
        </div>
    }
    <div className="container">
        <h2 className="centers-title">
            Консультаційні центри
        </h2>
        <div className="centers-cards">
            
            {centers?.map((center, index) => (
                <CenterItem key={index} center={center}/>
            ))}
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default CentersPage