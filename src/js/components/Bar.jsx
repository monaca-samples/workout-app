import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ContrastIcon from "@mui/icons-material/Contrast";

const Bar = ({ title, toggleDrawer, changeTheme }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          pt: `env(safe-area-inset-top)`,
          pl: `env(safe-area-inset-left)`,
          pr: `env(safe-area-inset-right)`,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open-drawer"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="change-theme"
            onClick={changeTheme}
          >
            <ContrastIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Bar;
