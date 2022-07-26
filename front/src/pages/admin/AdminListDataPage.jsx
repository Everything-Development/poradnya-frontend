import {useEffect} from 'react'
import * as React from 'react';
import './admin.scss'
import AdminMenu from '../../components/admin/AdminMenu'
import AdminHeader from '../../components/admin/AdminHeader'
import DataTable from '../../components/admin/AdminDataTable'

import { useSelector, useDispatch } from 'react-redux';
import { loadCentersAsync } from '../../redux/reducers/centers/thunks'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import smile from '../../assets/smile.png'
import { useLocation } from 'react-router-dom';
import admin_settings from '../../components/admin/admin_settings'


const AdminListDataPage = () => {
  const dispatch = useDispatch()
  const {isLoading, centers, errorMessage} = useSelector((state) => state.centers)

  let location = useLocation()
  let current_page = []
  const currentPage = location.pathname

  admin_settings.admin_menu.forEach( section => 
    {
      section.links_list.forEach(link => {
        {
          if (link.url == currentPage){
            current_page = link
          }
        }
      })
    }
  )

  useEffect(() => {
    dispatch(loadCentersAsync())
  }, [])


  return (
    <>
    <div className='admin-body'>

        <AdminMenu/>

        <div className='admin-main-layout'>
          
            <AdminHeader title={current_page.name} logged_user={"1mgavura@gmail.com"}/>
            {isLoading && 
              <>
                <Box sx={{ width: '100%', color: '#E6B751'}}><LinearProgress color='inherit' style={{height: '3px'}}/></Box>
                <div className='loading-screen'>
                  <img src={smile} />
                  <p>Please wait, data is loading..</p>
                </div>
              </>
            }
            {errorMessage && <h3 align='center'>{errorMessage}</h3>}
            {centers && 
              <DataTable rows={centers} columns={current_page.columns.center_columns}/>
            }
        </div>
    </div>
    </>
  )
   
}

export default AdminListDataPage