import { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

//estilos para la barra de búsqueda
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "15ch",
    "&:focus": {
      width: "25ch",
    },
  },
}));

export const Navbar = ({ onSearchChange }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static">
      <Toolbar>
        {/* LOGO */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bookstore
        </Typography>

        {/* Links desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <NavLink to="/books" style={{ textDecoration: "none", color: "inherit" }}>Libros</NavLink>
          <NavLink to="/login" style={{ textDecoration: "none", color: "inherit" }}>Login</NavLink>
          <NavLink to="/admin" style={{ textDecoration: "none", color: "inherit" }}>Admin</NavLink>
        </Box>

        {/* Menú hamburguesa mobile */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuItem component={NavLink} to="/books" onClick={handleCloseNavMenu}>
              Libros
            </MenuItem>
            <MenuItem component={NavLink} to="/login" onClick={handleCloseNavMenu}>
              Login
            </MenuItem>
            <MenuItem component={NavLink} to="/admin" onClick={handleCloseNavMenu}>
              Admin
            </MenuItem>
          </Menu>
        </Box>

        {/* 🔎 Search bar */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar…"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => onSearchChange?.(e.target.value)}
          />
        </Search>

        {/* Avatar / User menu */}
        <Box sx={{ flexGrow: 0, ml: 2 }}>
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar />
          </IconButton>
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
