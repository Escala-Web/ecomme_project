import { ReactNode, useState } from "react";
import {
    AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon,
    ListItemText, Menu, MenuItem, Avatar, Box, Collapse
} from "@mui/material";
import { ExpandLess, ExpandMore, Dashboard, Settings, Build } from "@mui/icons-material";
import { ContainerHeader } from "./styles";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    children?: ReactNode;
}

const drawerWidth = 240;

export const Header = ({ children }: HeaderProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    const navigate = useNavigate();

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        navigate('/')
    }

    // Toggle para submenu principal
    const handleSubMenuToggle = () => {
        setOpenSubMenu(!openSubMenu);
    };

    // Toggle para submenu de configurações
    const handleSettingsToggle = () => {
        setOpenSettings(!openSettings);
    };

    return (
        <ContainerHeader>


            {/* Barra Superior */}
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Logo
                    </Typography>
                    <IconButton color="inherit" onClick={handleMenuClick}>
                        <div className="profile">
                            <Avatar>G</Avatar>
                            <p>Guilherme</p>
                        </div>
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
                        <MenuItem onClick={logout}>Sair</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            <Box sx={{ display: "flex" }}>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", zIndex: 1 },
                    }}
                >
                    <Toolbar />
                    <List>
                        {/* Item principal */}
                        <ListItem onClick={handleSubMenuToggle}>
                            <ListItemIcon><Dashboard /></ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>

                        <ListItem onClick={handleSettingsToggle}>
                            <ListItemIcon><Settings /></ListItemIcon>
                            <ListItemText primary="Produtos" />
                            {openSettings ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openSettings} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem sx={{ pl: 4 }}>
                                    <ListItemIcon><Build /></ListItemIcon>
                                    <ListItemText primary="Meus produtos" />
                                </ListItem>
                                <ListItem sx={{ pl: 4 }}>
                                    <ListItemIcon><Settings /></ListItemIcon>
                                    <ListItemText primary="Cadastrar produtos" />
                                </ListItem>
                            </List>
                        </Collapse>


                    </List>
                </Drawer>

                {/* Conteúdo ao lado do menu */}
                <Box component="main" sx={{ flexGrow: 1, paddingLeft: 2 }}>
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </ContainerHeader>
    );
};
