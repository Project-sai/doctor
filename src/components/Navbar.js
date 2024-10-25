import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, useLocation, UseLocation} from 'react-router-dom'
import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Import Exit icon
import {  useNavigate } from 'react-router-dom'; // Import useNavigate

// const drawerWidth = 240;

export default function Navbar(props) {
  const navigate = useNavigate(); // Initialize useNavigate
const {drawerWidth , content} = props
const location = useLocation()
const path = location.pathname
const [open ,setopen] = React.useState(false)
const changeopenstatus =()=>{
setopen(!open)
}
const handleLogout = () => {
  localStorage.removeItem('access_token'); // Clear token
  navigate('/login'); // Navigate to login page
};
const myDrawer = (
    <div>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            
              <ListItem  disablePadding>
                <ListItemButton component ={Link} to="/Home" selected={"/" === path}>
                  <ListItemIcon>
                       <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>

              <ListItem  disablePadding>
                <ListItemButton component ={Link} to="/about" selected={"/about" === path}>
                  <ListItemIcon>
                       <InfoIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"About"} />
                </ListItemButton>
              </ListItem>

          </List>
        </Box>
    </div>
)



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>

            <IconButton 
            color ="inherit"
            onClick={changeopenstatus}
            sx ={{mr:2,display:{sm:"none"}}}
            >
                 <MenuIcon/>
            </IconButton>

          <Typography variant="h6" noWrap component="div">
            sai Apllication
          </Typography>
           {/* Logout Button in Top Nav Bar */}
           <IconButton color="inherit" onClick={handleLogout}>
            Logout
                <ExitToAppIcon />
             </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          display :{xs :'none',sm:'block'},
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {myDrawer}

      </Drawer>

      <Drawer
        variant="temporary"
        open ={open}
        onClose ={changeopenstatus}
        sx={{
          display :{xs :'block',sm:'none'},
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {myDrawer}

      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
       {content}
      </Box>
    </Box>
  );
}