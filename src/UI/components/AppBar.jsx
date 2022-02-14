import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { appData } from '../util/constants'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const TopBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${appData.drawerWidth}px)`,
      marginLeft: `${appData.drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

export const AppBar = (props) => {
  const { open, setOpen, title } = props;
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <TopBar
      open={open}
      sx={{
        boxShadow: "none",
        border: "none",
        backgroundColor: "white",
        color: "black",
        mt: 2,
        paddingLeft: 1,
        position: "absolute",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        {title === "Dashboard" ? (
          <Typography variant="h7" noWrap component="h4">
            {title}
          </Typography>
        ) : (
          <Button variant='text' sx={{textTransform: 'none'}} onClick={() => navigate('/dashboard')}>
            <ArrowBackRoundedIcon />
            <Typography
              variant="h7"
              noWrap
              component="h4"
              sx={{ paddingLeft: 2 }}
            >
              {title}
            </Typography>
          </Button>
        )}
      </Toolbar>
    </TopBar>
  );
};
