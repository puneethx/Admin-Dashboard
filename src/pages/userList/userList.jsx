import "./userList.css";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { DeleteOutline } from "@mui/icons-material";
import { styled } from '@mui/material/styles';


function customCheckbox(theme) {
  return{
  '& .MuiCheckbox-root svg': {
    width: 12,
    height: 12,
    backgroundColor: 'transparent',
    border: `1px solid ${
      theme.palette.mode === 'light' ? '#ffffff' : '#354065'
    }`,
    borderRadius: 2,
  },
  '& .MuiCheckbox-root svg path': {
    display: 'none',
  },
  '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
    backgroundColor: '#9faee3',
    borderColor: '#9faee3',
  },
  '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
      position: 'absolute',
      display: 'table',
      border: '2px solid #fff',
      borderTop: 0,
      borderLeft: 0,
      transform: 'rotate(45deg) translate(-50%,-50%)',
      opacity: 1,
      transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
      content: '""',
      top: '50%',
      left: '39%',
      width: 5.71428571,
      height: 9.14285714,
  },
  '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
    width: 8,
    height: 8,
    backgroundColor: '#9faee3',
    transform: 'none',
    top: '39%',
    border: 0,
  },
}
}

const SDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: `1px solid ${
        theme.palette.mode === 'light' ? '#344378' : '#781919'
      }`,
    },
    '& .MuiDataGrid-cell': {
      color:
        theme.palette.mode === 'light' ? 'rgba(255,255,255)' : 'rgba(0,0,0)',
    },
    '& .MuiPaginationItem-root': {
      borderRadius: 0,
    },
  ...customCheckbox(theme),
}));

const columns = [
  { field: 'id', 
    headerName: 'ID', 
    width: 90,
  },
  {
    field: 'user',
    headerName: 'User',width: 200,
    editable: true, renderCell: (params)=>{
      return (
        <div className="userListUser">
          <img className= "userListImg" src={params.row.avatar} alt=""/>
          {params.row.userName}
        </div>
      )
    }
    
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 330,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
  {
    field: 'transaction',
    headerName: 'Trasaction Volume',
    width: 200,
  },
  {
    field: 'actions',
    headerName: "",
    width:150,
    renderCell: (params)=>{
      return(
        <>
          <button className="userListEdit">Edit</button>
          <DeleteOutline className="userListDelete"/>
        </>
      )
    }
  }

];

const rows = [
  { id: 1, userName: 'T Puneeth Reddy', avatar: 'https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic', 
  email: 'puneeth.21bce7948@vitapstudent.ac.in',
  status: "active",
  transaction: '₹1,40,000',
  },
  { id: 2, userName: 'T Puneeth Reddy', avatar: 'https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic', 
  email: 'puneeth.21bce7948@vitapstudent.ac.in',
  status: "active",
  transaction: '₹1,40,000',
  },
  { id: 3, userName: 'T Puneeth Reddy', avatar: 'https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic', 
  email: 'puneeth.21bce7948@vitapstudent.ac.in',
  status: "active",
  transaction: '₹1,40,000',
  },
  { id: 4, userName: 'T Puneeth Reddy', avatar: 'https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic', 
  email: 'puneeth.21bce7948@vitapstudent.ac.in',
  status: "active",
  transaction: '₹1,40,000',
  },
  { id: 5, userName: 'T Puneeth Reddy', avatar: 'https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic', 
  email: 'puneeth.21bce7948@vitapstudent.ac.in',
  status: "active",
  transaction: '₹1,40,000',
  },
  { id: 6, userName: 'T Puneeth Reddy', avatar: 'https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic', 
  email: 'puneeth.21bce7948@vitapstudent.ac.in',
  status: "active",
  transaction: '₹1,40,000',
  },
  { id: 7, userName: 'T Puneeth Reddy', avatar: 'https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic', 
  email: 'puneeth.21bce7948@vitapstudent.ac.in',
  status: "active",
  transaction: '₹1,40,000',
  },
  { id: 8, userName: 'T Puneeth Reddy', avatar: 'https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic', 
  email: 'puneeth.21bce7948@vitapstudent.ac.in',
  status: "active",
  transaction: '₹1,40,000',
  },
  { id: 9, userName: 'T Puneeth Reddy', avatar: 'https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic', 
  email: 'puneeth.21bce7948@vitapstudent.ac.in',
  status: "active",
  transaction: '₹1,40,000',
  },
  { id: 10, userName: 'T Puneeth Reddy', avatar: 'https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic', 
  email: 'puneeth.21bce7948@vitapstudent.ac.in',
  status: "active",
  transaction: '₹1,40,000',
  },

];


export default function userList() {
  return (
    <div className="userList">
    <Box sx={{ height: 400, width: '100%', }}>
      <SDataGrid
        checkboxSelection
        sx={{
          border: 3,
          borderColor: '#384369',
          color:'#ffffff',
          '& .MuiDataGrid-cell:hover': {
          color: '#b5c5ff',
        },
      }}S
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  )
}




