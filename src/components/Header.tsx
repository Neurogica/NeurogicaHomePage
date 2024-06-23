import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink as Link } from 'react-router-hash-link';
import useStyles from './HeaderStyles';

const Header: React.FC = () => {
  const classes = useStyles(); // スタイルを適用
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '20px',
            }}
          >
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/images/neurogica_logo.png`}
                alt="Neurogica logo"
                className={classes.logo}
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box className={classes.navButtons} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button component={Link} smooth to="/#about" className={classes.button}>会社概要</Button>
            <Button component={Link} smooth to="/#services" className={classes.button}>サービス一覧</Button>
            <Button component={Link} smooth to="/#vision" className={classes.button}>ビジョン</Button>
            <Button component={Link} smooth to="/people" className={classes.button}>People</Button>
            <Button component={Link} smooth to="/contact" className={classes.button}>お問い合わせ</Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton className={classes.iconButton} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <List className={classes.drawerList}>
            <ListItem button component={Link} smooth to="/#about" onClick={toggleDrawer(false)}>
              <ListItemText primary="会社概要" />
            </ListItem>
            <ListItem button component={Link} smooth to="/#services" onClick={toggleDrawer(false)}>
              <ListItemText primary="サービス一覧" />
            </ListItem>
            <ListItem button component={Link} smooth to="/#vision" onClick={toggleDrawer(false)}>
              <ListItemText primary="ビジョン" />
            </ListItem>
            <ListItem button component={Link} smooth to="/people" onClick={toggleDrawer(false)}>
              <ListItemText primary="People" />
            </ListItem>
            <ListItem button component={Link} smooth to="/contact" onClick={toggleDrawer(false)}>
              <ListItemText primary="お問い合わせ" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Header;
