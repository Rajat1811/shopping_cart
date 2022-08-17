import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import React, { useState } from 'react'
import { ShoppingBag } from '@mui/icons-material';
import Pic1 from './logo.png'
import Login from './Login'
import Registration from './Registration'



const TabPanel = (props) =>{
    const {children, value, index} =props;
    return(
        <div role='tabpanel' hidden={value!== index}>
           {
            value === index && (
                <Box>{children}</Box>
            )
           }
        </div>
    )
}

const LoginReg = () => {
    const[value, setValue] = useState(0);

    const handleChange = (event,newValue) => {
        setValue(newValue);
    }

  return (
    <>
     <Grid container sx={{height: '90vh'}}>
        <Grid item lg={7} sm={5} sx={{
            backgroundImage: `url(${Pic1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: {xs: 'none', sm: 'block' },
            marginTop:'10px',
            marginBottom: '10px'
        }}>
        </Grid>

         <Grid item lg={5} sm={7} xs={12}>
            <Card sx={{width: '100%', height: '100%'}}>
                <Box sx={{mx:3, height: 500}}>
                    <Box sx={{ borderBottom:1, borderColor: 'divider'}}>
                        <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                            <Tab label='Login' sx={{textTransform: 'none', fontWeight: 'bold'}}></Tab>
                            <Tab label='Register' sx={{textTransform: 'none', fontWeight: 'bold'}}></Tab>
                        </Tabs>
                    </Box>
                     <TabPanel value={value} index={0}><Login/></TabPanel>
                     <TabPanel value={value} index={1}><Registration/></TabPanel>
                </Box>
                {/* <Box textAlign='' sx={{ mt:2 }}>
                    <ShoppingBag sx={{ color: 'purple', fontSize: 100}}/>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Rajat Bains</Typography>
                </Box> */}
            </Card>
        </Grid>
     </Grid>
    </>
  )
}

export default LoginReg