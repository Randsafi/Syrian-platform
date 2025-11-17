import LoginNavbar from "./Navbar/LoginNavbar";

import { Box, Button, Container, Stack, TextField, Grid, Typography, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';

function RePassword() {
    const [formData,setFormData]=useState({
        password:'',
        RePassword:'',
    })
      const [showPassword, setShowPassword] = useState(false);
    
      const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleMouseUpPassword = (event) => {
        event.preventDefault();
      };

    const handleChange = (field) => (event) => {
      setFormData({
        ...formData,
        [field]: event.target.value
      });
    };

    const validateForm = (password) => {
      const errors = {};  

      // تحقق من كلمة السر
      const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;
      if (!password) {
        errors.password = 'كلمة السر مطلوبة';
      } else if (password.length < 6) {
        errors.password = 'كلمة السر يجب أن تكون至少 6 أحرف';
      } else if (!passwordRegex.test(password)) {
        errors.password = 'كلمة السر يجب أن تحتوي على رمز واحد على الأقل';
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
            <Container maxWidth="sm" sx={{marginTop:'400px', gap: 2, my: 3  }}>
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
                  <Typography variant="body1" sx={{ mr: 3 ,marginLeft:'420px'  }}>كلمة المرور</Typography>
                  <TextField
                      id="outlined-password-input"
                      placeholder=" ادخل كلمة السر"
                      value={formData.password}
                      onChange={handleChange('Password')}
                      helperText="6 أحرف من فضلك يجب ان تحتوي على رموز ايضا."
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                          endAdornment: (
                              <InputAdornment position="end">
                            <IconButton
                              aria-label={
                                  showPassword ? 'hide the password' : 'display the password'
                                }
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              onMouseUp={handleMouseUpPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                    }}
                    />
                    <Typography variant="body1" sx={{ mr: 3 ,marginLeft:'420px'  }}>تأكيد كلمة المرور</Typography>  
                    <TextField
                      id="outlined-password-input"
                      placeholder=" ادخل كلمة السر"
                      value={formData.RePassword}
                      onChange={handleChange('RePassword')}
                      helperText="6 أحرف من فضلك يجب ان تحتوي على رموز ايضا."
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                              }
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              onMouseUp={handleMouseUpPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                 <Grid container spacing={2}>
                    <Grid  size={{ xs: 6, md: 9 }}>
                      <Button variant='contained' sx={{borderRadius:'30px' ,height:'50px' , width:'100%'}} onClick={handleNext} >انشاء كلمة مرور جديدة</Button>
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

export default RePassword;