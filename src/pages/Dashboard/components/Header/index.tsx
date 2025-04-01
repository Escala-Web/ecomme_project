import { ReactNode, useContext, useState } from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Avatar,
	Box,
	Collapse,
	ListItemButton,
} from "@mui/material";
import {
	ExpandLess,
	ExpandMore,
	Dashboard,
	Settings,
	Build,
    Title,
} from "@mui/icons-material";
import { ContainerHeader } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/Auth";
import { toast } from "react-toastify";
import LabelIcon from "@mui/icons-material/Label";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface HeaderProps {
	children?: ReactNode;
}

const drawerWidth = 280;

export const Header = ({ children }: HeaderProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [openSubMenu, setOpenSubMenu] = useState(false);
	const [openSettings, setOpenSettings] = useState(false);

	const { logout } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		logout();
		toast.success("Até a proxima :)");
		navigate("/");
	};

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
			<AppBar position="fixed" sx={{ backgroundColor: '#fff', boxShadow: 'none', borderBottom: '1px solid #ccc' }}>
				<Toolbar>
					<Typography variant="h6" sx={{ flexGrow: 1, color: '#333' }}>
						Logo
					</Typography>
					<IconButton color="inherit" onClick={handleMenuClick}>
						<div className="profile">
							<Avatar>G</Avatar>
							<p>Guilherme</p>
						</div>
					</IconButton>
					<Menu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={handleMenuClose}
					>
						<MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
						<MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
						<MenuItem onClick={handleLogout}>Sair</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>

			<Box sx={{ display: "flex" }}>
				<Drawer
					variant="permanent"
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						"& .MuiDrawer-paper": {
							width: drawerWidth,
							boxSizing: "border-box",
							zIndex: 1,
						},
					}}
				>
					<Toolbar />
					<List>

                        <Typography sx={{ paddingLeft: '20px', fontSize: '14px', fontWeight: 'bold', color: '#222121d7', margin: '1rem 0 .6rem' }} variant="p" >Dashboard</Typography>
						{/* Item principal */}
						<ListItemButton
							onClick={handleSubMenuToggle}
							sx={{ "&:hover": { backgroundColor: "lightgray" } }}
						>
							<ListItemIcon>
								<Dashboard />
							</ListItemIcon>
							<ListItemText primary="Dashboard" />
						</ListItemButton>

                        <ListItemButton
							onClick={handleSubMenuToggle}
							sx={{ "&:hover": { backgroundColor: "lightgray" } }}
						>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary="Usuarios" />
						</ListItemButton>

                        <ListItemButton
							onClick={handleSubMenuToggle}
							sx={{ "&:hover": { backgroundColor: "lightgray" } }}
						>
							<ListItemIcon>
								<ShoppingCartIcon />
							</ListItemIcon>
							<ListItemText primary="Pedidos" />
						</ListItemButton>

						<ListItemButton
							onClick={handleSettingsToggle}
							sx={{ "&:hover": { backgroundColor: "lightgray" } }}
						>
							<ListItemIcon>
								<LabelIcon />
							</ListItemIcon>
							<ListItemText primary="Produtos" />
							{openSettings ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>

						<Collapse in={openSettings} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								<ListItemButton
									sx={{ pl: 4, "&:hover": { backgroundColor: "lightgray" } }}
								>
									<ListItemIcon>
										<LabelIcon />
									</ListItemIcon>
									<ListItemText primary="Meus produtos" />
								</ListItemButton>
								<ListItemButton
                                    component={Link}
                                    to={'produtos'}
									sx={{ pl: 4, "&:hover": { backgroundColor: "lightgray" } }}
								>
									<ListItemIcon>
										<LabelIcon />
									</ListItemIcon>
									<ListItemText primary="Cadastrar produtos" />
								</ListItemButton>
							</List>
						</Collapse>
					</List>
				</Drawer>

				{/* Conteúdo ao lado do menu */}
				<Box component="main" sx={{ flexGrow: 1, backgroundColor: '#f1f6f9', padding: '0 4rem' }}>
					{/* <Toolbar /> */}
					    {children}
					{/* <Toolbar /> */}
				</Box>
			</Box>
		</ContainerHeader>
	);
};
