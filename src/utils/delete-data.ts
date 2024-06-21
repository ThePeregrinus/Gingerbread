import { instance, URL } from "../routes/url-config"

// CANT FIND DOCUMENT EVEN WITH POSTMAN
export const deleteData =  async (token:string, id:string) =>{
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