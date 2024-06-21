import { instance } from "../routes/url-config"
import { URL } from "../routes/url-config"

export const addData = async (token:string) =>{
    try{
        if(token){
            const time = new Date().toISOString()
            const json = JSON.stringify({ 
                "companySigDate": `${time+'\t'}`, 
                "companySignatureName": "энилоуп", 
                "documentName": "энвилоупнейм", 
                "documentStatus": "статус", 
                "documentType": "тип", 
                "employeeNumber": "работник", 
                "employeeSigDate": `${time+'\t'}`, 
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