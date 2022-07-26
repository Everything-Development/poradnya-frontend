// import React from 'react'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';



const StyledButton = styled(Button)(({ theme })  => ({
    zIndex: '1',
    background: 'none',
    borderRadius: '48px',
    border: '1px solid #FFFFFF',
    padding: '16px 24px',
    color: 'white',
    boxShadow: 'none',
    marginLeft:'5px',
    height: '56px',
    textTransform: 'none',
    fontFamily: 'Rubik',
    marginTop: '30px',
    '&:hover': {
        backgroundColor: '#E6B751',
        border: '1px solid #E6B751',
        boxShadow: 'none',
        color: 'black',
    }
}));



const HomeButtonLink = ({text}) => {
  return (
    <><StyledButton onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeAEZS0gt9tjeUkZsKrdj7rGBzfvfaYgDTdszmU84geyu1pag/viewform", "_blank")} variant="contained">{text}</StyledButton></>
  )
}


export default HomeButtonLink;