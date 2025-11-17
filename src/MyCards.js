import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function MyCards({name,status,species,image,origin,location}) {

    return(
        <Card sx={{ display: 'flex',backgroundColor:'#3C3E44',direction:'ltr' }}>
          <Box sx={{ display: 'flex', flexDirection:'row'  }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={image}
              alt="Live from space album cover"
            />
            <CardContent sx={{ direction:'ltr'  }}>
              <Typography component="div" variant="h4">
                {name}
              </Typography>
              <Typography
                variant="h4"
                component="div"
                sx={{ color: 'text.secondary' }}
                >
                {status} {species}
              </Typography>
              <Typography 
                component="div"
                variant='h5'>
                Last known Location:
              </Typography>
              <Typography 
                component="div"
                variant='h5'>
                {location.name}
                {/* {location.url} */}
              </Typography>
              <Typography
                component="div"
              >
                First seen in:
              </Typography>
            </CardContent>
          </Box>
    </Card>
    );
}

export default MyCards;