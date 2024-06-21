import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from "@mui/material"
import { useContext } from 'react';

import { Context } from '../context';


export const EditButton = () =>{
    const {toogle, setToogle} = useContext(Context)
    return <Button color="inherit"  onClick={()=>{setToogle(!toogle)}}> < SettingsIcon/> </Button>
}