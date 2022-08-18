import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import Login from './Login';



const Registration = () => {
    
    const navigate = useNavigate();

   const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })

    const handleSubmit= (e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            name : data.get('name'),
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
            tc: data.get('tc'),
        }
        // console.log(actualData)
        if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
            if (actualData.password === actualData.password_confirmation){
                console.log(actualData);

            document.getElementById('registration-form').reset()
            setError({ status: true, msg: "Registration Success", type: 'success' })
            navigate('/login')
            }else {
            setError({ status: true, msg: "Password Doesn't match", type: 'error' })
        }
            
        } else {
            setError({ status: true, msg: "All Fields are Required", type: 'error' })
        }
  }
    

    
  return (
   <>
    <Box component='form' noValidate sx={{mt: 1}} id="registration-form" onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
        <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
        <TextField margin='normal' required fullWidth id='password' name='password' type='password' label='Password' />
        <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' type='password' label='Confirm Password' />
          <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
        <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Rgister</Button>
        </Box>
        {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
    </Box>
   </>
  )
}

export default Registration