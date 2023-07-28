import React from 'react'
import "./productList.css"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { productRows } from '../../dummydata';
import { useState} from "react";

export default function ProductList() {
  const [data,setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id!==id))
  }
  
  const columns = [
    { field: 'id', 
      headerName: 'ID', 
      width: 90,
    },
    {
      field: 'product',
      headerName: 'Product',width: 200,
      editable: true, renderCell: (params)=>{
        return (
          <div className="productListUser">
            <img className= "productListImg" src={params.row.img} alt=""/>
            {params.row.name}
          </div>
        )
      }
      
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 330,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
    },
    {
      field: 'actions',
      headerName: "",
      width:150,
      renderCell: (params)=>{
        return(
          <>
          <Link to={"/product/"+params.row.id}>
            <button className="productListEdit">Edit</button>
          </Link>
            <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    }
  
  ];
  
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
  return (
        <div className="productList">
        <Box sx={{ height: 530, width: '100%', }}>
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
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                },
              },
            }}
            pageSizeOptions={[8]}
            disableRowSelectionOnClick
          />
        </Box>
        </div>
  )
}
