import {useEffect} from 'react'
import * as React from 'react';
import './admin.scss'
import AdminMenu from '../../components/admin/AdminMenu'
import AdminHeader from '../../components/admin/AdminHeader'
import DataTable from '../../components/admin/AdminDataTable'

import example from '../../assets/background_landing.png'
import { useSelector, useDispatch } from 'react-redux';
import { loadCentersAsync } from '../../redux/reducers/centers/thunks'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import smile from '../../assets/smile.png'
import building from '../../assets/building.png'


const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'image', headerName: 'Image', width: 70,
    renderCell: (params) => {
        if (params.row.photo == null){
          return (
            <p>
              <img src={building} className='admin-table-image'/>
            </p>
          )
        } else {
          return(
            <img src={params.row.photo} className='admin-table-image'/>
          )
        }
        
    }
  },
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'address', headerName: 'Address', width: 200 },
  {
    field: 'region',
    headerName: 'Region',
    width: 200,
  },
  {
    field: 'website',
    headerName: 'Website',
    width: 200,
  },
  {
    field: 'tags',
    headerName: 'Tags',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 20,
    valueGetter: (params) =>
      `${params.row.tags.length || ''}`,
  },
];





const AdminCentersPage = () => {
  const dispatch = useDispatch()
  const {isLoading, centers, errorMessage} = useSelector((state) => state.centers)

  useEffect(() => {
    dispatch(loadCentersAsync())
  }, [])
  return (
    <>
    <div className='admin-body'>

        <AdminMenu/>

        <div className='admin-main-layout'>
          
            <AdminHeader title={"Centers"} logged_user={"1mgavura@gmail.com"}/>
            {isLoading && 
              <>
                <Box sx={{ width: '100%', color: '#E6B751'}}><LinearProgress color='inherit' style={{height: '3px'}}/></Box>
                <div className='loading-screen'>
                  <img src={smile} />
                  <p>Please wait, data is loading..</p>
                </div>
              </>
            }
            {errorMessage && <h1>{errorMessage}</h1>}
            {centers && 
              <DataTable rows={centers} columns={columns}/>
            }
        </div>
    </div>
    </>
  )
   
}

export default AdminCentersPage