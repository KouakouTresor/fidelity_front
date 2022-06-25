
import React, { ReactElement, useState } from 'react';
import {
  Box,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";

const DrawerComponent = (): ReactElement => {
    const menu = [
        { label: 'Category', link: '/' },
        { label: 'Clients', link: '/' },
        { label: 'Prix', link: '/' },
        { label: 'Statistique', link: '/' },
        { label: 'Autre', link: '/' },
    ];
    const [openDrawer, setOpenDrawer] = useState(false);

      return (
        <Box>
          <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <List>
              {menu.map((menu, index) => (
                <ListItemButton key={index}>
                  <ListItemIcon>
                    <ListItemText>{menu.label}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </List>
          </Drawer>
          <IconButton
            sx={{ color: "white", marginLeft: "auto" }}
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      );
};

export default DrawerComponent;
