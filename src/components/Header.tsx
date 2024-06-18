import React from 'react';
import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink as Link } from 'react-router-hash-link';
import useStyles from './HeaderStyles'; // スタイルをインポート

const Header: React.FC = () => {
  const classes = useStyles(); // スタイルを適用

  return (
    <AppBar position="fixed" className={classes.header}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '20px',
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/neurogica_logo.png`}
            alt="Neurogica logo"
            className={classes.logo}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/neurogica_logo_white.png`}
            alt="Neurogica Name"
            className={classes.logoWhite}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box className={classes.navButtons} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button component={Link} smooth to="#about" className={classes.button}>会社概要</Button>
          <Button component={Link} smooth to="#services" className={classes.button}>サービス一覧</Button>
          <Button component={Link} smooth to="#vision" className={classes.button}>ビジョン</Button>
          <Button component={Link} smooth to="/people" className={classes.button}>People</Button>
          <Button component={Link} smooth to="/contact" className={classes.button}>お問い合わせ</Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton className={classes.iconButton}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
