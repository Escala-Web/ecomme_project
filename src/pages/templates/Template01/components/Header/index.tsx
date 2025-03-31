import React, { useContext, useState } from "react";
import { ContainerHeader, ContainerNavibar } from "./styles";
import { Search } from "./Ui/Search";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

import { FaBarsStaggered } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";
import { Logo } from "./Ui/Logo";

export const Header = React.memo(() => {
	const login = false
	const navigate = useNavigate();

	const logo = "data:image/png;base64,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"

	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	return (
		<>
			<ContainerHeader>
				<div className="container_header_main">
					<Logo image={logo} />
					<Search />
					<div className="container_header_actions">
						<div className="container_header_login">
							<div className="header_login_icon">
								<FaUserAlt />
							</div>
							{login === false ? (
								<p>
									<Link to="/login">Entre</Link> ou <br />
									<Link to="/">Cadastre-se</Link>
								</p>
							) : (
								<p onClick={() => navigate("/custumer")}>
									Olá, Guilherme
								</p>
							)}
						</div>
						<div className="container_favorid_and_cart">
							<div className="favorit">
								<FiHeart className="icons" />
							</div>
							<div className="cart">
								<MdOutlineShoppingCart className="icons" />
							</div>
						</div>
					</div>
				</div>

				<div className="container_header_main_mobile">
					<div className="header_mobile_top">
						<FaBarsStaggered onClick={toggleDrawer(true)} />
						<Logo image={logo} />
						<div className="container_favorid_and_cart">
							<div className="favorit">
								<FiHeart className="icons" />
							</div>
							<div className="cart">
								<MdOutlineShoppingCart className="icons" />
							</div>
						</div>
					</div>
					<div className="search_mobile">
						<Search />
					</div>
				</div>

				<div className="container_header_navigation">
					<nav className="container_navigation">
						<ul>
							<li>
								<Link to="/">Página Inicial</Link>
							</li>
							<li>
								<Link>Categorias</Link>
							</li>
							<li>
								<Link>Marcas</Link>
							</li>

							<li>
								<Link to="/produtos">Lançamentos</Link>
							</li>
							<li>
								<Link>Suporte</Link>
							</li>
						</ul>
					</nav>
				</div>
			</ContainerHeader>

			<Drawer open={open} onClose={toggleDrawer(false)}>
				<Box
					sx={{ width: 350 }}
					role="presentation"
					onClick={toggleDrawer(false)}
				>
					<ContainerNavibar>
						<div>
							<div className="container_nav">
								{login ? (
									<>
										<Avatar>G</Avatar>
										<p>Olá, Guilçherenm</p>
									</>
								) : (
									<>
										<Avatar>E</Avatar>
										<p>Olá, Entrar na conta</p>
									</>
								)}
							</div>
							<Divider />
							{/* <List>
								{navigationSite.map((text, index) => (
									<ListItem key={index} disablePadding>
										<ListItemButton component={Link} to={text.link}>
											<ListItemIcon>{text.icon}</ListItemIcon>
											<ListItemText primary={text.name} />
										</ListItemButton>
									</ListItem>
								))}
							</List>
							{login !== null ? (
								<>
									<Divider />
									<List>
										{navigationSiteAdm.map((text, index) => (
											<ListItem key={index} disablePadding>
												<ListItemButton>
													<ListItemIcon>{text.icon}</ListItemIcon>
													<ListItemText primary={text.name} />
												</ListItemButton>
											</ListItem>
										))}
									</List>
								</>
							) : ''} */}
						</div>
						<div className="container_enter">
							<Link to="/login" className="link enter">
								Entrar
							</Link>
							<Link to="/register" className="link register">
								Cadastre-se
							</Link>
						</div>
					</ContainerNavibar>
				</Box>
			</Drawer>
		</>
	);
});
