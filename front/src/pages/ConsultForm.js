// import React from 'react'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import backgroung404 from '../assets/404background.png'
import '../App.scss';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 64,
    position: 'relative',
    border: '0px solid #ced4da',
    fontSize: 14,
    padding: '10px 26px 10px 20px',
    lineHeight: '36px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    color: '#818181',
    backgroundColor: '#EFEFEF',
    fontFamily: [
      'Rubik',
    ].join(','),
    '&:focus': {
      borderRadius: 64,
    },
  },
}));


const StyledButton = styled(Button)(({ theme })  => ({
    backgroundColor: '#F4E2B9',
    borderRadius: '64px',
    [theme.breakpoints.up('sm')]: {
        width: '545px',

    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
    boxShadow: 'none',
    marginLeft:'5px',
    height: '56px',
    textTransform: 'none',
    color: 'black',
    fontFamily: 'Rubik',
    marginTop: '30px',
    '&:hover': {
        backgroundColor: '#E6B751',
        boxShadow: 'none',
    }
}));




const ConsultForm = () => {
    const [problem, setPorblem] = React.useState('Що вас турбує?');
    const [area, setArea] = React.useState('Де Ви зараз проживаєте?');

  const handleChangeProblem = (event) => {
    setPorblem(event.target.value);
  };
  const handleChangeArea = (event) => {
    setArea(event.target.value);
  };


  return (
    <div className='fadeInDiv'>
    <div className="contacts-background" style={{background: `url(${backgroung404}) center / cover no-repeat`}}>
        <div className="find-centers">
            <div className='find-centers-head'>
                <h1>Шукати консультаційний центр</h1>
                <p>Виберіть проблему, яка Вас турбує, та свою область проживання</p>
            </div>
            <FormControl sx={{ width: '100%' }}  variant="standard">
                <p className='find-center-label'>Проблема</p>
                <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={problem}
                onChange={handleChangeProblem}
                input={<BootstrapInput />}

                MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: 'white',
                        borderRadius: '16px',
                        boxShadow: ' 4px 4px 15px 0px #FFFFFF inset',
                        height: '35%',
                        '& .MuiMenuItem-root': {
                          padding: 2,
                          '&:hover': {
                              backgroundColor: '#FFF8EA',
                          },
                          '&:focus': {
                            backgroundColor: '#E6B751',
                        }
                        },
                      },
                    },
                  }}
                >
                <MenuItem value="Що вас турбує?">
                    Що вас турбує?  
                </MenuItem>
                <MenuItem value="Депресія і апатія">Депресія і апатія</MenuItem>
                <MenuItem value="Сімейні стосунки">Сімейні стосунки</MenuItem>
                <MenuItem value="Стосунки">Стосунки</MenuItem>
                <MenuItem value="Тривога">Тривога</MenuItem>
                <MenuItem value="Особиста криза">Особиста криза</MenuItem>
                <MenuItem value="Травма">Травма</MenuItem>
                <MenuItem value="Харчові розлади">Харчові розлади</MenuItem>
                <MenuItem value="Горе і втрата">Горе і втрата</MenuItem>
                <MenuItem value="Інше">Інше</MenuItem>

                </Select>
            </FormControl>


            <FormControl sx={{ width: '100%', marginTop:'30px' }} variant="standard">
                <p className='find-center-label'>Область</p>
                <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={area}
                onChange={handleChangeArea}
                input={<BootstrapInput />}
                MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: 'white',
                        borderRadius: '16px',
                        boxShadow: ' 4px 4px 15px 0px #FFFFFF inset',
                        height: '35%',
                        '& .MuiMenuItem-root': {
                          padding: 2,
                          '&:hover': {
                              backgroundColor: '#FFF8EA',
                          },
                          '&:focus': {
                            backgroundColor: '#E6B751',
                        }
                        },
                      },
                    },
                  }}
                >
                <MenuItem value="Де Ви зараз проживаєте?">
                Де Ви зараз проживаєте? 
                </MenuItem>
                <MenuItem value="Україна">Вся Україна</MenuItem>
                <MenuItem value="Вінницька область">Вінницька область</MenuItem>
                <MenuItem value="Волинська область">Волинська область</MenuItem>
                <MenuItem value="Дніпропетровська область">Дніпропетровська область</MenuItem>
                <MenuItem value="Донецька область">Донецька область</MenuItem>
                <MenuItem value="Житомирська область">Житомирська область</MenuItem>
                <MenuItem value="Закарпатська область">Закарпатська область</MenuItem>
                <MenuItem value="Запорізька область">Запорізька область</MenuItem>
                <MenuItem value="Івано-Франківська область">Івано-Франківська область</MenuItem>
                <MenuItem value="Київська область">Київська область</MenuItem>
                <MenuItem value="Кропивницька область">Кропивницька область</MenuItem>
                <MenuItem value="Луганська область">Луганська область</MenuItem>
                <MenuItem value="Львівська область">Львівська область</MenuItem>
                <MenuItem value="Миколаївська область">Миколаївська область</MenuItem>
                <MenuItem value="Одеська область">Одеська область</MenuItem>
                <MenuItem value="Полтавська область">Полтавська область</MenuItem>
                <MenuItem value="Рівненська область">Рівненська область</MenuItem>
                <MenuItem value="Сумська область">Сумська область</MenuItem>
                <MenuItem value="Тернопільська область">Тернопільська область</MenuItem>
                <MenuItem value="Харківська область">Харківська область</MenuItem>
                <MenuItem value="Херсонська область">Херсонська область</MenuItem>
                <MenuItem value="Хмельницька область">Хмельницька область</MenuItem>
                <MenuItem value="Черкаська область">Черкаська область</MenuItem>
                <MenuItem value="Чернівецька область">Чернівецька область</MenuItem>
                <MenuItem value="Чернігівська область">Чернігівська область</MenuItem>
                </Select>
            </FormControl>
            <Link to={{pathname: '/centers', search: `?problem=${problem}&region=${area}`, state: problem}} style={{textDecoration: 'none'}}><StyledButton variant="contained">Шукати центр</StyledButton></Link>
        </div>

    </div>
    </div>
  )
}

export default ConsultForm