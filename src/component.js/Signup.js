import '../App.css';

// HOOKS IMPORTS
import { useState } from 'react';

// MUI IMPORTS
import { Box, Button, Checkbox,Container, IconButton, Stack, TextField, Typography ,InputAdornment, InputLabel, FormControlLabel, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginNavbar from './Navbar/LoginNavbar';

function Signup() {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    isTrue:false
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

  // FUNCTIONS FOR ACTIONS
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup=()=>{
    if(validateForm)
      alert("wlcome to application user")
  }
    
  return(
     <div>
      <LoginNavbar/>
      <Container maxWidth="sm" sx={{marginBottom:'400px', gap: 2, my: 3  }}>
       <Box sx={{ display:'flex',flexDirection:'column' , gap: 2, my: 3 }}>
        <Typography variant="h4" > انشاء حساب جديد</Typography>
        <Box style={{ display:'flex',alignItems: 'center',justifyContent:'center',flexDirection:'row' , gap: 2, my: 3 }}>
         <Typography variant="h6" color='#1e2830ff' >هل لديك حساب على المنصة السورية؟</Typography> 
         <Typography variant="h6" color='#0c72d8ff' > سجل دخولك </Typography> 
        </Box>
        <Stack sx={{ display: 'flex' ,alignItems: 'center',justifyContent:'center',flexDirection:'row' }}>
          <Button variant='outlined'sx={{borderRadius:'30px' ,marginLeft:'10px'}} color="inherit"><GoogleIcon/> انشاء حساب جوجل</Button>
          <Button variant='outlined'sx={{borderRadius:'30px'}} color="inherit"><AppleIcon/>انشاء حساب آبل</Button>
        </Stack>
        <Typography variant="body1" sx={{ mr: 3 }}> أو</Typography>
        <Stack
         autoComplete="off" 
         component="form"
         sx={{display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'stretch',
            gap: 2, my: 3,
            direction:'rtl' }}>
           <InputLabel sx={{ mr: 3  }}> الاسم</InputLabel>
           <TextField
            required
            id="outlined-input"
            value={formData.name}
            onChange={handleChange('name')}
            placeholder=" ادخل الاسم الكامل"
            
          //   sx={{borderRadius:'15px'}}
          />
          <Typography variant="body1" sx={{ mr: 3 ,marginLeft:'410px' }}>البريد الالكتروني</Typography>
          <TextField
            required
            id="outlined-input"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="ادخل البريد الالكتروني"
            
          //   sx={{borderRadius:'15px'}}
          />
          <Typography variant="body1" sx={{ mr: 3 ,marginLeft:'450px' }}> كلمة السر</Typography>
          <TextField
            id="outlined-password-input"
            placeholder=" ادخل كلمة السر"
            value={formData.password}
            onChange={handleChange('password')}
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
          {/* خانة الموافقة على الشروط */}
        <Box sx={{ display:'flex', alignItems:'start',justifyContent:'start', mt: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isTrue}
                onChange={(e)=>setFormData({...formData,isTrue:e.target.checked})}
                size="small"
                // color={errors.acceptTerms ? "error" : "primary"}
              />
            }
            label={
              <Typography variant="body2">
                أوافق على {' '}
                <Link href="#" underline="hover">
                  سياسة الخصوصية
                </Link>
                {' '} و {' '}
                <Link href="#" underline="hover">
                  الشروط والأحكام
                </Link>
              </Typography>
            }
            sx={{
              // alignItems: 'flex-start',
              '& .MuiFormControlLabel-label': {
                marginTop: '2px'
              }
            }}
          />
          {/* {errors.acceptTerms && (
            <Typography variant="caption" color="error" sx={{ display: 'block', mt: 0.5, ml: 4 }}>
              {errors.acceptTerms}
            </Typography>
          )} */}
        </Box>
          <Button variant='contained' sx={{borderRadius:'30px' ,height:'50px'}} onClick={handleSignup}>انشاء حساب</Button>
        </Stack>
        </Box> 
      </Container>
     </div>
  )
}

export default Signup;