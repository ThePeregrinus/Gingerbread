import { instance } from "../routes/url-config"
import { URL } from "../routes/url-config"



export const addData = async (token:string, inputs : object) => {
    try{
        if(token){
            return await instance.post(URL.ADD_DATA, JSON.stringify(inputs), {headers:{
                'x-auth':token
            },})
        }
    }
    catch(e){
        throw new Error(e as string)
    }
}