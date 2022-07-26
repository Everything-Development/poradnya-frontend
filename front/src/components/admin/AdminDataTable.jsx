import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../../pages/admin/admin.scss'
import example from '../../assets/background_landing.png'
export default function DataTable(props) {
  return (
      <>
      <div className='admin-controls'>
        <div className='admin-delete-selected'>
            <p>Delete</p>
        </div>
        <div className='admin-create-new'>
            <p>Create new</p>
        </div>
      </div>
    <div className='admin-datatable'>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{
            border: 2,
            borderRadius: '15px',
            borderColor: 'rgb(246, 246, 246)',
            '& .MuiDataGrid-renderingZone': {
                maxHeight: 'none !important'
              },
              '& .MuiDataGrid-cell': {
                  height: '65px',
                lineHeight: 'unset !important',
                maxHeight: 'none !important',
                whiteSpace: 'normal',
                wordWrap: 'break-word'
              },
              '& .MuiDataGrid-row': {
                maxHeight: 'none !important'
              },
            '& .MuiDataGrid-cell:focus': {
              outline: 'none'
            },
            '& .MuiCheckbox-root': {
                color: '#E6B751',
            },
          }}
      />
    </div>
    </>
  );
}
