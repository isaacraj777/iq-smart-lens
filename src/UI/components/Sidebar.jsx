import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import Drawer from '@mui/material/Drawer';
import { ReactComponent as SmartLensIcon } from '../../assets/smartLens.svg';
import { IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { appData } from '../util/constants';
import { DrawerHeader } from './DrawerHeader';

export const Sidebar = (props) => {

    const { open, setOpen } = props
    const navigate = useNavigate();
    const items = [
        {
          name: 'Dashboard',
          icon: <GridViewRoundedIcon />,
          route: '/dashboard',
        },
        {
          name: 'Notifications',
          icon: <NotificationsActiveRoundedIcon />,
          route: '#'
        },
        {
          name: 'Settings',
          icon: <SettingsRoundedIcon />,
          route: '#',
        }
    ]

    const handleDrawerClose = () => {
        setOpen(false);
      };

    return (
        <Drawer
          sx={{
          width: appData.drawerWidth,
          borderRadius: 2,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: appData.drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#2B2E7D",
            borderRadius: "10px",
            margin: 1,
            height: "830px",
            position: "absolute",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
            <SmartLensIcon />
          </IconButton>
        </DrawerHeader>
        <List sx={{ backgroundColor: "#2B2E7D", color: "#FFFFFF" }}>
          {items.map((item) => (
            <ListItem
              button
              key={item.name}
              sx={{
                marginBottom: 5,
                marginTop: 5,
              }}
              onClick={() => navigate(item.route)}
            >
              <ListItemIcon sx={{ color: "#FFFFFF", paddingLeft: 5 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText sx={{ paddingLeft: 2 }}>
                <Typography
                  component="h5"
                  variant="h7"
                  sx={{ fontWeight: 500 }}
                >
                  {item.name}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
}