import { instance } from "../routes/url-config"
import { URL } from "../routes/url-config"



export const addData = async (token:string, json : string) => {
    try{
        if(token){
            return await instance.post(URL.ADD_DATA, json, {headers:{
                'x-auth':token
            },})
        }
    }
    catch(e){
        throw new Error(e as string)
    }
}