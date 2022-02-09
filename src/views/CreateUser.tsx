import { TextField } from '@mui/material';
import React from 'react';

export default function CreateUser() {
    return(
    <div 
            style={{
                backgroundColor: 'red',
                height: '500px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
        
        <div style={{
            backgroundColor: 'green',
            height: '90%',
            width:'40%'}}
            
            
            >
                <TextField label={'Nome do Usuário'} variant='outlined' style={{backgroundColor:'white'}}/>
                
        </div>
            
    </div>


    )
}