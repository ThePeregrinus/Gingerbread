import { useContext,useEffect } from "react";
import {Navigate} from 'react-router-dom'
import { TokenContext } from "../context";
import { PathConstants } from "../routes";
import { instance } from "../routes/url-config";
import { URL } from "../routes/url-config";



export function Table(){
    const {token, setToken} = useContext(TokenContext)

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
    return <h1>hello</h1>
    
}