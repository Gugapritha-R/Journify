import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon } from '@mui/material';
import Profile from './Profile';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {

  
const navigate=useNavigate;

const logoutProcess=()=>{

    navigate('/login');

}


const [searchQuery,setSearchQuery]=useState('');


const searchProcess=()=>{


}

const clearSearch=()=>{

  setSearchQuery("");
}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Journify
          </Typography>
          <SearchBar value={searchQuery} onChange={({target})=>{
            setSearchQuery(target.value);
          }} clearSearch={clearSearch} searchProcess={searchProcess}/>
         <Profile onLogout={logoutProcess}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
