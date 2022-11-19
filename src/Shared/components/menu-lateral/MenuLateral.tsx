import { Avatar, Box, Divider, Drawer,Icon,List,ListItemButton,ListItemIcon,ListItemText,useMediaQuery,useTheme } from "@mui/material";
import React from "react";
import {useDrawerContext} from "../../contexts";

interface globalMenuProps {
  children: React.ReactNode;
}
export const MenuLateral: React.FC<globalMenuProps>=({children}) =>{
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext ();
  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)}>
          
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">

            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://i.pinimg.com/736x/71/53/0a/71530ab2805b75ccc1500b7f573ebf06.jpg"
            />
        
          </Box>
          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon> 
                </ListItemIcon>
                <ListItemText primary="Pagina Inicial" />
              </ListItemButton>

            </List>

          </Box>

          

        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>

    </>
  );

};