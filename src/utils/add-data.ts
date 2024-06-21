import { instance } from "../routes/url-config"
import { URL } from "../routes/url-config"

export const addData = async (token:string) =>{
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