import { IconButton, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = (props) => {
    const { setInputUser } = props;
    const [valueInput, setValueInput] = useState("");

    const handleSubmit = ()=>{
        setInputUser(valueInput);
    }

  return (
    <Stack direction="row" sx={{marginTop: "20px", width: "80%"}}>
        <TextField
          id="outlined-basic" 
          label="GitHub User"
          placeholder="Buscar usuario de github" 
          variant="outlined"
          size='small'
          value={valueInput}
          onChange={(e)=> setValueInput(e.target.value)}
          sx={{width: "90%"}}
        />

        <IconButton onClick={handleSubmit} sx={{left: "-45px"}}>
          <SearchIcon/>
        </IconButton>
    </Stack>
  )
}

export default Search