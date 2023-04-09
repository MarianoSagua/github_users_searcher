import { Container } from '@mui/material';
import './App.scss';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import { getUsers } from './API/DataUser';
import CardUser from './components/CardUser';

function App() {
  const [inputUser, setInputUser] = useState("octocat");
  const [actualUser, setActualUser] = useState(inputUser);
  const [error, setError] = useState(false);

  const gettingUsers = async ()=>{
    try {
      const dataResponse = await getUsers(inputUser);

      if(dataResponse.message === "Not Found"){
        setError(true);
      }else{
        setError(false);
        setActualUser(dataResponse);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    gettingUsers();
  }, [inputUser]);


  return (
    <Container id="app" sx={{background: "whitesmoke", 
      width: "80vw",
      marginTop: "40px",
      borderRadius: "16px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>

      <Search setInputUser={setInputUser}/>

      {error ?
        <Container sx={{display: "grid", placeContent: "center", height: "500px"}}>
          <h2>Usuario no encontrado!</h2>
        </Container>
        :
        <CardUser actualUser={actualUser}/>
      }
    </Container>
  );
}

export default App;
