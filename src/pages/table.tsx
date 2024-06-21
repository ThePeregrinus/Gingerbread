import { Box} from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useContext,useEffect, useState } from "react";
import {Navigate} from 'react-router-dom'

import { AppBarMenu } from "../components/appbar";
import { TokenContext } from "../context";
import { PathConstants } from "../routes";
import { instance } from "../routes/url-config";
import { URL } from "../routes/url-config";

export function Table(){
    const {token, setToken} = useContext(TokenContext)
    const [data, setData] = useState<Array<any>>([])

    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
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

      const rows = [
        { id: 1, companySignatureName: 'Snow', companySigDate: 'Jon', documentName: 14, documentStatus:'st', documentType:'doctype',employeeSigDate:'emsig', employeeSignatureName:'signmee' },
        { id: 2, companySignatureName: 'Lannister',companySigDate: 'Cersei', documentName: 31, documentStatus:'st', documentType:'doctype',employeeSigDate:'emsig', employeeSignatureName:'signmee' },
        { id: 3, companySignatureName: 'Lannister', companySigDate: 'Jaime', documentName: 31, documentStatus:'st' , documentType:'doctype',employeeSigDate:'emsig', employeeSignatureName:'signmee'},
        { id: 4, companySignatureName: 'Stark', companySigDate: 'Arya', documentName: 11, documentStatus:'st', documentType:'doctype',employeeSigDate:'emsig', employeeSignatureName:'signmee' },
        { id: 5, companySignatureName: 'Targaryen', companySigDate: 'Daenerys', documentName: null, documentStatus:'st' , documentType:'doctype',employeeSigDate:'emsig', employeeSignatureName:'signmee'},
        { id: 6, companySignatureName: 'Melisandre', companySigDate: null, documentName: 150, documentStatus:'st', documentType:'doctype',employeeSigDate:'emsig' , employeeSignatureName:'signmee'},
        { id: 7, companySignatureName: 'Clifford', companySigDate: 'Ferrara', documentName: 44, documentStatus:'st' , documentType:'doctype',employeeSigDate:'emsig', employeeSignatureName:'signmee'},
        { id: 8, companySignatureName: 'Frances', companySigDate: 'Rossini', documentName: 36 , documentStatus:'st', documentType:'doctype',employeeSigDate:'emsizcg', employeeSignatureName:'signmee'},
        { id: 9, companySignatureName: 'Roxie', companySigDate: 'Harvey', documentName: 65 , documentStatus:'st', documentType:'doctype',employeeSigDate:'emsig', employeeSignatureName:'signmee'},
      ];  
      
    const getData = async (token:string) =>{
        try{
            if(token){
                return await instance.get(URL.GET_DATA,{headers:{
                    'x-auth':token
                }})
            }
        }
        catch(e){
            throw new Error(e as string)
        }
    }

    const addData = async (token:string) =>{
        try{
            if(token){
                const time = new Date().toISOString() +'\t'
                const json = JSON.stringify({ 
                    "companySigDate": {time}, 
                    "companySignatureName": "энилоуп", 
                    "documentName": "энвилоупнейм", 
                    "documentStatus": "статус", 
                    "documentType": "тип", 
                    "employeeNumber": "работник", 
                    "employeeSigDate": {time}, 
                    "employeeSignatureName": "test" 
                }
                )
                return await instance.post(URL.ADD_DATA, json, {headers:{
                    'x-auth':token
                },})
            }
        }
        catch(e){
            throw new Error(e as string)
        }
    }

    // CANT FIND DOCUMENT EVEN WITH POSTMAN
    const deletedData =  async (token:string, id:string) =>{
        try{
            if(token){
                return await instance.post(URL.DELETE_DATA + id, {headers:{
                    'x-auth':token
                },})
            }
        }
        catch(e){
            throw new Error(e as string)
        }
    }

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
        // console.log('getData', getData(token).then(res=>console.log('resGET', res)))
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

        

    })

    if(!token){
        return <Navigate to={PathConstants.HOME} />
    }
    return <>
    <AppBarMenu/>
    <Box sx={{ height: 400, width: '100%' }}>
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
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>
    
}