import { Link } from '@mui/material';
import building from '../../assets/building.png'

const center_columns = [
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
    {
      field: 'region',
      headerName: 'Region',
      width: 200,
    },
    {
      field: 'website',
      headerName: 'Website',
      width: 150,
    },
    {
      field: 'tags',
      headerName: 'Tags',
      description: 'This column has a value getter and is not sortable.',
      width: 20,
      valueGetter: (params) =>
        `${params.row.tags.length || ''}`,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        valueGetter: (params) => {
            <p>123</p>
                // <Link to={`${window.location.pathname}/${params.row.id}`} className='admin-table-view'>View</Link>
        }
    }
  ];

export default { center_columns };