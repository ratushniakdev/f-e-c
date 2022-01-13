import React, {useState} from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {ListAppointments} from "./components/ListAppointments";
import {Container} from "@mui/material";

function App() {

  return (
    <div className="App">
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            >
            </IconButton>
            <Typography variant="h4" component="div" sx={{left: 0}}>
              List of appointments
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container style={{marginTop: "50px"}} fixed={true} maxWidth={"xl"}>
        <ListAppointments/>
      </Container>
    </div>
  );
}

export default App;
