import * as React from 'react';
import { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import theme from "../utils/theme";
import { ThemeProvider } from "@mui/material";
import { useNavigate, useLocation, Link } from 'react-router-dom'
import logo_main from '../assets/logo.svg'
import logo_white from '../assets/logo_white_.svg'

import Drawer from '@mui/material/Drawer';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';


function LinkTab(props) {
  // alert(color_value)
  const navigate = useNavigate(); 
  return (
    <Tab
      sx={{color: props.color_value, fontSize: 16}}
      component="a"
      onClick={(event) => {
        event.preventDefault();
        navigate(props.href)
      }}
      {...props}
    />
  );
}


export const Header = () => {
  const location = useLocation();
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [logoSvg, setLogoSvg] = useState(logo_main)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let tabcolor = 'black'

  if (location.pathname === '/' || location.pathname === '/centers' || (location.pathname !== '/' && location.pathname !== '/centers' && location.pathname !== '/blog' && location.pathname !== '/aboutus' && location.pathname !== '/contacts' && location.pathname !== '/consult_form') ){
    tabcolor = 'white'
  }

  useEffect(() => {
    if (location.pathname === '/centers')
    {
      setLogoSvg(logo_main)
      setValue(2)
    }
    else if (location.pathname === '/blog'){
      setValue(3)
      setLogoSvg(logo_main)
    }
    else if (location.pathname === '/'){
      setValue(6)
      setLogoSvg(logo_white)
    }
    else if (location.pathname === '/consult_form')
    {
      setLogoSvg(logo_white)
      setValue(1)
    }
    else if ( location.pathname === '/aboutus' ){
      setLogoSvg(logo_main)
      setValue(0)
    }
    else {
      setLogoSvg(logo_main)
    }

  }, [location.pathname])

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  let admin_header = ['/admin', '/admin/', '/admin/centers', '/admin/blog', '/admin/tags', '/admin/edit-entity']

      const HeaderHTML = () => {
        return (
          <div>
      <div className='mobileV'>
        <Drawer
            anchor={'right'}
            open={drawerOpen}
            onClose={toggleDrawer}
            PaperProps={{
              sx: {
                backgroundColor: "#2C2727",
                color: "white",
              }
            }}
          >
            <IconButton aria-label="Example" sx={{fontSize: 30, marginLeft:'20px', marginTop:'20px', height:60, width: 60}}>
              <ArrowForwardIosRoundedIcon onClick={toggleDrawer} sx={{fontSize: 30, color:'white'}}/>
            </IconButton>
            <div className='mobile-menu'>
              <Link to='/aboutus' onClick={toggleDrawer}><p>Про нас</p></Link>
              <Link to='/consult_form' onClick={toggleDrawer}><p>Шукати консультаційний центр</p></Link>
              <Link to='/centers' onClick={toggleDrawer}><p>Консультаційні центри</p></Link>
              <Link to='/blog' onClick={toggleDrawer}><p>Блог</p></Link>
              <Link to='/contacts' onClick={toggleDrawer}><p>Контакти</p></Link>
            </div>
            

          </Drawer>
        </div>
      { (location.pathname !== '/admin' && location.pathname !== '/admin/centers' && location.pathname !== '/admin/blog' ) &&
            <Link to='/'><img src={logoSvg} alt="Порадня" className="header-logo noselect pointer"/></Link>
          }
    <div className='header-pc'>
    <ThemeProvider theme={theme}>
      { (location.pathname !== '/admin' && location.pathname !== '/admin_centers' && location.pathname !== '/admin_blog' ) ?
      <Box sx={{ borderBottom: 0, borderColor: 'divider' , position: 'absolute', zIndex:'1000', right:'50px', top: '10px'}}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" centered textColor={tabcolor}>
        <LinkTab color_value={tabcolor} label="Про нас" href="/aboutus" />
        <LinkTab color_value={tabcolor} label="Шукати консультаційний центр" href="/consult_form" />
        <LinkTab color_value={tabcolor} label="Консультаційні центри" href="/centers" />
        <LinkTab color_value={tabcolor} label="Блог" href="/blog" />
        <LinkTab color_value={tabcolor} label="Контакти" href="/contacts" />
      </Tabs>
    </Box>
    :
            <></>
      }
      
    </ThemeProvider>
    </div>
    <div className='mobileV'>
    <IconButton aria-label="Example" sx={{position: 'absolute', zIndex: '10', color:tabcolor, right: 20, top:30}}>
      <MenuRoundedIcon onClick={toggleDrawer} sx={{fontSize:50,}}/>
    </IconButton>
    </div>
    
  </div>
        )
      }
  return (
    <>
    {!admin_header.includes(location.pathname) &&
      <HeaderHTML/> 
    }
    </>
  )
}


export default Header;