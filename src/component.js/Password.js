import '../App.css'
import LoginNavbar from "./Navbar/LoginNavbar";

import { Box, Button, Container, Stack, TextField, Grid, Typography } from "@mui/material";
import { useState } from "react";

function Password() {
    const [email,setEmail]=useState('')

    const validateForm = (email) => {
      const errors = {};  

      // تحقق من الإيميل
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        errors.email = 'البريد الإلكتروني مطلوب';
      } else if (!emailRegex.test(email)) {
        errors.email = 'البريد الإلكتروني غير صالح';
      } 
      return errors;
    };

  const handleNext=()=>{
    if(validateForm)
        alert("thank you ")
    }

    return(
        <div>
            <LoginNavbar/>
            <Container maxWidth="sm" sx={{marginBottom:'400px', gap: 2, my: 3  }}>
                <Box sx={{ display:'flex',flexDirection:'column' , gap: 2, my: 3 }}>
                    <Typography variant="h4">هل نسيت كلمة المرور الخاصة بك ؟</Typography>
                    <Typography variant="body1" color="#2b353fff" sx={{ mr: 3 }}>ادخل البريد الالكتروني الشخصي لاكمال العملية</Typography>
                </Box>
              <Box sx={{ display:'flex',flexDirection:'column' , gap: 2, my: 3 }}>
                
                <Stack
                 autoComplete="off" 
                 component="form"
                 sx={{display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',
                    alignItems:'stretch',
                    gap: 2, my: 3,
                    direction:'rtl' }}>
                  <Typography variant="body1" sx={{ mr: 3 ,marginLeft:'420px'  }}>البريد الالكتروني</Typography>
                  <TextField
                    required
                    id="outlined-input"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder="البريد الالكتروني"
                  />
                 <Grid container spacing={2}>
                    <Grid  size={{ xs: 6, md: 9 }}>
                      <Button size="large" variant='contained' sx={{borderRadius:'30px' ,height:'50px', width:'100%'}} onClick={handleNext} >التالي</Button>
                    </Grid>
                    <Grid size={{ xs: 6, md: 3 }}>
                      <Button size="large" variant='outlined' sx={{borderRadius:'30px' ,height:'50px', width:'100%'}} >الغاء</Button>
                    </Grid>
                 </Grid>
                  
                </Stack>
               </Box> 
            </Container>
        </div>
    )
}

export default Password;