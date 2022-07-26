import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import ArticleIcon from '@mui/icons-material/Article';
import TagIcon from '@mui/icons-material/Tag';
import logo_evdev from '../../assets/logo_evdev.png'
import {Link} from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { motion } from "framer-motion";
import '../../pages/admin/admin.scss'
import admin_settings from "./admin_settings"

const AdminMenuSection = ({section}) => {
    return (
        <>
            <p>{section.title}</p>
            <ul>
                {section.links_list.map((element, index) => (
                    <>
                    <Link to={element.url}><li>{element.icon} {element.name}</li></Link>
                    </>
                ))}
            </ul>
        </>
    )
}

const AdminMenu = () => {

  return (
    <div className='admin-menu'>
        <div className='admin-header-logo'>
            <Link to='/admin'><h3>Admin Panel</h3></Link>
        </div>
        <div className='admin-menu-navs'>
            {admin_settings.admin_menu?.map((element, index) => (
                <AdminMenuSection key={index} section={element}/>
            ))}
        </div>
        <div className='admin-evdev'>
            <p>created by</p>
            <img src={logo_evdev}/>
        </div>
    </div>
  )
}

export default AdminMenu