import { instance, URL } from "../routes/url-config"

export const getData = async (token:string) =>{
    try{
        if(token){
            console.log('token get',token)
            return await instance.get(URL.GET_DATA,{headers:{
                'x-auth':token
            }})
        }
    }
    catch(e){
        throw new Error(e as string)
    }
}