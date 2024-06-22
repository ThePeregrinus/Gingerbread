
import { Box} from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useContext,useEffect, useState } from "react";
import {Navigate} from 'react-router-dom'

import { AppBarMenu } from "../components/appbar";
import { DeleteButton } from '../components/delete-button';
import { EditButton } from "../components/edit-button";
import { Context } from "../context";
import { PathConstants } from "../routes";
import { Irow } from "../types";
import { getData } from "../utils/get-data";

export function Table(){
    const {token, toogle} = useContext(Context)
    const [data, setData] = useState<Array<Irow>>([])


    const columns: GridColDef<(typeof rows)[number]>[] = [
        {field: 'delete', headerName: 'Delete', width:70, sortable: false, renderCell: (row)=> <DeleteButton id={row.row.id}/>},
        {field: 'setting', headerName: 'Setting',  sortable: false, renderCell: (row)=> <EditButton id={row.row.id} row = {row.row}/>},
        { field: 'numeric', headerName: 'ID', width: 90 },
        {
            field: 'documentStatus',
            headerName: 'documentStatus',
            width: 150,
            editable: true,
          },
          {
            field: 'employeeNumber',
            headerName: 'employeeNumber',
            width: 150,
            editable: true,
          },
          {
            field: 'documentType',
            headerName: 'documentType',
            width: 150,
            editable: true,
          },
          {
            field: 'documentName',
            headerName: 'documentName',
            width: 150,
            editable: true,
          },
          {
            field: 'companySignatureName',
            headerName: 'companySignatureName',
            width: 150,
            editable: true,
          },
          {
            field: 'employeeSigDate',
            headerName: 'employeeSigDate',
            width: 150,
            editable: true,
          },
          {
            field: 'employeeSignatureName',
            headerName: 'employeeSignatureName',
            width: 150,
            editable: true,
          },
          {
          field: 'companySigDate',
          headerName: 'companySigDate',
          width: 150,
          editable: true,
        },
          
      ];
      
      console.log(data)
      const rows = data.map((column, icolumn)=>{return {...column, numeric:icolumn + 1}});
      

    useEffect(()=>{
         getData(token).then(res=>setData(res?.data.data))

    }, [toogle])

    if(!token){
        console.log('tokeeen', token)
        return <Navigate to={PathConstants.HOME} />
    }
    return <>
    <AppBarMenu/>
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid  
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
    </>
    
}