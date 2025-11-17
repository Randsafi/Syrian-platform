import '../App.css';

// HOOKS IMPORTS
import { useState } from 'react';

// MUI IMPORTS
import { Box, Button, Container, IconButton, Stack, TextField, Typography ,InputAdornment } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginNavbar from './Navbar/LoginNavbar';
import { Link } from 'react-router-dom';

function LogIn() {
  const [formData,setFormData]=useState({
    email:'',
    password:''
  })
  const [showPassword, setShowPassword] = useState(false);

  // FUNCTIONS TO ACTIONS
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

  const validateForm = (email, password) => {
    const errors = {};  

    // تحقق من الإيميل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = 'البريد الإلكتروني مطلوب';
    } else if (!emailRegex.test(email)) {
      errors.email = 'البريد الإلكتروني غير صالح';
    } 

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

  const handleLogin=()=>{
    if(validateForm)
      alert("wlcome to application user")
  }

  return (
    <>
    <LoginNavbar/>
    <Container maxWidth="sm" sx={{marginBottom:'300px', gap: 2, my: 3  }}>
      <Box sx={{ display:'flex',flexDirection:'column' , gap: 2, my: 3 }}>
       <Typography variant="h4" >تسجيل الدخول</Typography>
       <Box style={{ display:'flex',alignItems: 'center',justifyContent:'center',flexDirection:'row' , gap: 2, my: 3 }}>
        <Typography variant="h6" color='#1e2830ff' > لديك حساب على المنصة السورية؟</Typography> 
        <Link to={"/register"}>
          <Typography variant="h6" color='info' > انشاء حساب </Typography> 
        </Link>
       </Box>
       <Stack sx={{ display: 'flex' ,alignItems: 'center',justifyContent:'center',flexDirection:'row' }}>
         <Button variant='outlined'sx={{borderRadius:'30px' ,marginLeft:'10px'}} color="inherit"><GoogleIcon/>تسجيل عبر جوجل</Button>
         <Button variant='outlined'sx={{borderRadius:'30px'}} color="inherit"><AppleIcon/>تسجيل عبر آبل</Button>
       </Stack>
       <Typography variant="body1" sx={{ mr: 3 }}> أو</Typography>
       <Stack
        autoComplete="off" 
        component="form"
        sx={{display:'flex',
           flexDirection:'column',
           justifyContent:'space-between',
           alignItems:'stretch',
           gap: 2, my: 3,
           direction:'rtl' 
           }}>
         <Typography variant="body1" sx={{ mr: 3 ,marginLeft:'410px' }}>البريد الالكتروني</Typography>
         <TextField
           required
           id="outlined-input"
           value={formData.email}
           onChange={handleChange('email')}
           placeholder="البريد الالكتروني"

         //   sx={{borderRadius:'15px'}}
         />
         <Typography variant="body1" sx={{ mr: 3 ,marginLeft:'450px' }}> كلمة السر</Typography>
         <Typography variant="subtitle2" sx={{marginLeft:'250px' ,color:'gray' }}> 6 أحرف من فضلك يجب ان تحتوي على رموز ايضا. </Typography>
         <TextField
           id="outlined-password-input"
           placeholder="كلمة السر"
           value={formData.password}
           onChange={handleChange('password')}
           // helperText="6 أحرف من فضلك يجب ان تحتوي على رموز ايضا."
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
         <Link to={"/forgot-password"}>
          <Typography variant="h6" sx={{ mr: 3 }}> هل نسيت كلمة السر ؟</Typography>
         </Link> 
          <Button variant='contained' sx={{borderRadius:'30px' ,height:'50px'}} onClick={handleLogin}> تسجيل الدخول</Button>
       </Stack>
      </Box> 
    </Container>
    </>
  )
}

export default LogIn;