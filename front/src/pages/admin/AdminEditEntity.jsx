import * as React from 'react';

import './admin.scss'
import AdminMenu from '../../components/admin/AdminMenu'
import { motion } from "framer-motion";
import AdminHeader from '../../components/admin/AdminHeader'
import { useLocation } from 'react-router-dom';
import admin_settings from '../../components/admin/admin_settings'
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#E6B751',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E6B751',
      borderRadius: '10px',
      transition: '0.3s',
    },
    '&:hover fieldset': {
      borderColor: '#E6B751',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#E6B751',
    },
  },
});


const AdminEditEntity = () => {
  let location = useLocation()
  let current_page = []
  const currentPage = location.pathname

  admin_settings.admin_menu.forEach( section => 
    {
      section.links_list.forEach(link => {
        {
          if (currentPage.includes(link.url)){
            current_page = link
          }
        }
      })
    }
  )
  return (
    <>
    <div className='admin-body'>

        <AdminMenu/>

        <div className='admin-main-layout'>
            <AdminHeader title={`Edit ${current_page.name}`} logged_user={"1mgavura@gmail.com"}/>
            <div className='admin-edit-fieldset'>
              <CssTextField label="Custom CSS" id="custom-css-outlined-input" style={{width: '300px'}}/>
            </div>
        </div>
    </div>
    </>
  )
   
}

export default AdminEditEntity