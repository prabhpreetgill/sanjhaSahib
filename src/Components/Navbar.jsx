import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './nav.css'
import Button from '@mui/material/Button';
import Logo from '../Media/sanjhaSahibLogo.png'

const drawerWidth = 240;
const navItems = ['Reminder', 'Message', 'Gallary'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Button disableRipple disableFocusRipple disableTouchRipple disableElevation>
                  <img src={Logo} alt='logo' style={{height: '150px'}}/>
      </Button>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" elevation={0} sx={{background: 'transparent', position: 'sticky'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'left'}}>
            <div>
                {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { lg: 'none' } }}
                >
                <MenuIcon />
                </IconButton> */}
                <Button disableRipple disableFocusRipple disableTouchRipple disableElevation>
                  <Box sx={{height: {xs: '75px', sm: '100px'}}}>
                    <img src={Logo} alt='logo' style={{maxHeight: '100%', maxWidth: '100%'}}/>
                  </Box>
                </Button>
            </div>
          {/* <div style={{display: { xs: 'none', lg: 'block'}}}>
            <Box>
                <Box sx={{ display: { xs: 'none', lg: 'block'}}}>
                    {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff', margin: '0 80px'}} disableRipple>
                        <Typography sx={{transitionDuration: '0.3s', fontFamily: 'Open Sans','&:hover': {color: '#FFCC00', transitionDuration: '0.3s'}}}>
                            {item}
                        </Typography>
                    </Button>
                ))}
                </Box>
            </Box>
          </div> */}
          <div style={{flex: 1}}>

          </div>
          
        </Toolbar>
      </AppBar>
      {/* <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#001041'},
          }}
        >
          {drawer}
        </Drawer>
      </Box> */}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;