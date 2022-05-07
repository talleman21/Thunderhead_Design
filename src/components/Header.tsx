import * as React from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const toggleServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box 
            component={NavLink}
            to='/'
            display={'flex'}
            sx={{mt:.5,textDecoration:'none'}}
          >
            <Typography
              variant="h5"
              noWrap
              component='span'
              color={'secondary'}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              Thunderhead
            </Typography>
            <Typography
              variant="h4"
              noWrap
              component="span"
              color='secondary'
              sx={{ mt: -.75, display: { xs: "none", md: "flex" } }}
            >
              |
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component="span"
              color="primary"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              DESIGN
            </Typography>
          </Box>
          <Box
            sx={{ mt: 0.25, flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button
              id={"services-button"}
              onClick={toggleServices}
              color="secondary"
            >
              Services
            </Button>
            <Button
              id={"gallery-button"}
              color="secondary"
              component={RouterLink}
              to="/Gallery"
            >
              Gallery
            </Button>
            <Button
              id={"contact-button"}
              color="secondary"
              component={RouterLink}
              to="/Contact"
            >
              Contact
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={anchorEl?.id === "services-button"}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component={RouterLink} to="Web-Design">
                Website Design
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={RouterLink} to="3D-Graphics-And-Animation">
                3D Graphics and Animation
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={RouterLink} to="3D-Printing">
                3D Printing
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
