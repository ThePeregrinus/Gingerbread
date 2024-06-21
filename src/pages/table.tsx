
import { Box} from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useContext,useEffect, useState } from "react";
import {Navigate} from 'react-router-dom'

import { AppBarMenu } from "../components/appbar";
import { DeleteButton } from '../components/delete-button';
import { EditButton } from "../components/edit-button";
import { Context } from "../context";
import { PathConstants } from "../routes";
import { instance } from "../routes/url-config";
import { URL } from "../routes/url-config";
import { getData } from "../utils/get-data";

export function Table(){
    const {token, setToken, toogle, setToogle} = useContext(Context)
    const [data, setData] = useState<Array<any>>([])


    const columns: GridColDef<(typeof rows)[number]>[] = [
        {field: 'delete', headerName: 'Delete', width:70, sortable: false, renderCell: (row)=> <DeleteButton id={row.row.id}/>},
        {field: 'setting', headerName: 'Setting',  sortable: false, renderCell: (row)=> <EditButton id={row.row.id}/>},
        { field: 'numeric', headerName: 'ID', width: 90 },
        {
          field: 'companySigDate',
          headerName: 'companySigDate',
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
          field: 'documentName',
          headerName: 'documentName',
          width: 150,
          editable: true,
        },
        {
            field: 'documentStatus',
            headerName: 'documentStatus',
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
            field: 'employeeNumber',
            headerName: 'employeeNumber',
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
      ];
      
      console.log(data)
      const rows = data.map((column, icolumn)=>{return {...column, numeric:icolumn + 1}});
      




    // RETURNS 200 OK BUT NOTHING HAPPENS
    const changeData = async (token:string, id:string, json: object) =>{
        try{
            if(token){
                const time = new Date().toISOString() +'\t'
                const body = JSON.stringify({...json, companySigDate:time, employeeSigDate:time })
                return await instance.post(URL.CHANGE_DATA + id, body, {headers:{
                    'x-auth':token
                },})
            } 
        }
        catch(e){
            throw new Error(e as string)
        }
    }
    
    useEffect(()=>{
        // OK
         console.log('fetching')
         getData(token).then(res=>setData(res?.data.data))
        
        // //console.log(addData(token).then(res=>console.log('resADD', res)))

        // ERROR
        // //console.log(deletedData(token, "04d62ac5-7109-408a-abd5-09884940b7fb").then(res=>console.log('resdel', res)))
     
        // 200 OK BUT ERROR
        // console.log("changeData",changeData(token, "04d62ac5-7109-408a-abd5-09884940b7fb", { 
        //     "companySignatureName": "не энилоуп", 
        //     "documentName": "не энвилоупнейм", 
        //     "documentStatus": "не статус", 
        //     "documentType": "не тип", 
        //     "employeeNumber": "не работник", 
        //     "employeeSignatureName": "не test" 
        // }).then((res)=>console.log(res, 123)).catch((e)=>console.log(e)))

        

    }, [toogle])

    if(!token){
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