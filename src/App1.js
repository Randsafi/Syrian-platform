import { useEffect ,useState} from 'react';
import './App.css';
import MyCards from './MyCards';
import axios from 'axios';
import {  Button, Container, Grid, TextField } from '@mui/material';

function App1() {
  
  // const axios = require('axios');
  const [query,setQuery]=useState("")
  // const [loading, setLoading] = useState(false);
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(function (response) {
      // handle success
      const characters=response.data.results

      setData(characters)
      console.log(response)
      }      
    )
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  
  },[])

  const handleSearch = () => {    
    const result = data.filter((q)=>{
      return (q.name === query) 
    })
    setData(result)
  };

  const list =data.map((characters)=>{
    return(
      <Grid size={6} key={characters.id}>
        <MyCards name={characters.name} 
          status={characters.status}
          species={characters.species} 
          image={characters.image} 
          origin={characters.origin}
          location={characters.location}
          />
      </Grid>
    )
  })

  return (
    <div className="App" style={{margin:"20px"}}>
      <header >
        <h1>Rick And Morty Fetch Task</h1>
        <Container  sx={{display:'flex' ,flexDirection:'row' }}>
            <TextField  fullWidth  id="outlined-basic" label="search" variant="outlined"
             value={query}
             onChange={(e)=>{setQuery(e.target.value)}}/>
            <Button variant="contained" onClick={handleSearch}>search</Button>
        </Container>
      </header>
        <Container maxWidth="lg" sx={{marginBottom:'30px'}}>
        <br/>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data ? list: <h1>No result</h1>}
         </Grid>
      </Container>
    </div>
  );
}

export default App1;
