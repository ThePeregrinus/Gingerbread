import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from "@mui/material"
import { useContext } from 'react';

import { Context } from '../context';


export const EditButton = ({id}: {id:string}) =>{
    //const {toogle, setToogle} = useContext(Context)
    return <Button color="inherit"  onClick={()=>{console.log('Edit', id)}}> < SettingsIcon/> </Button>
}