import React from 'react'
import './admin.scss'
import ApartmentIcon from '@mui/icons-material/Apartment';
import ArticleIcon from '@mui/icons-material/Article';
import TagIcon from '@mui/icons-material/Tag';
import logo_evdev from '../../assets/logo_evdev.png'
import AdminMenu from '../../components/admin/AdminMenu'
import { motion } from "framer-motion";
import AdminHeader from '../../components/admin/AdminHeader'

const AdminPage = () => {
  return (
    <>
    <div className='admin-body'>

        <AdminMenu/>

        <div className='admin-main-layout'>
            <AdminHeader title={"Summary"} logged_user={"1mgavura@gmail.com"}/>
        </div>
    </div>
    </>
  )
   
}

export default AdminPage