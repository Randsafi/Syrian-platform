import LanguageIcon from '@mui/icons-material/Language';
import { Box, Toolbar, Typography , Divider, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function LoginNavbar() {
  return (
    <div>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' ,justifyContent:'center'}}>
          <img 
          src="/logo/spLogo12.png" // المسار من مجلد public
          alt="شعار التطبيق"
          style={{ 
            width: '150px', 
            height: '70px', 
            marginLeft: '10px',
            objectFit: 'contain'
          }}
          onError={(e) => {
            e.target.style.display = 'none'; // إخفاء الصورة إذا لم توجد
          }}
        />
          <Divider sx={{ marginLeft: '10px' }} orientation="vertical" flexItem />
          <Typography variant="h4">
            الصفحة الرئيسية
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Typography variant="h6" sx={{ mx: 3, cursor: 'pointer' }}>
            الدعم والمساعدة
          </Typography>
          <Typography variant="h6" sx={{ cursor: 'pointer' }}>
            سياسة الخصوصية
          </Typography>
           <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
              //   value={age}
                label="العربية"
              //   onChange={handleChange}
              >
                <MenuItem value={10}>العربية</MenuItem>
                <MenuItem value={20}>English</MenuItem>
              </Select>
              <InputLabel id=""> <LanguageIcon/> اللغة</InputLabel>
            </FormControl>
        </Box>
      </Toolbar>
    </div>
  )
}

export default LoginNavbar;