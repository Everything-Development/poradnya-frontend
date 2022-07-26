import React from 'react'
import { motion } from "framer-motion";
import '../../pages/admin/admin.scss'

const AdminHeader = (props) => {
  return (
    <div className='admin-main-header'>
        <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -60, x: -200 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0}}
            viewport={{ once: false }}
        >
        <p className='admin-main-page-title'>{props.title}</p>
        </motion.div>
        <p className='admin-logged-user'>{props.logged_user}</p>
    </div>
  )
}

export default AdminHeader