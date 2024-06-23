import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#1E2225 !important',
  },
  logo: {
    marginRight: 10,
    marginTop: 10,
    height: '70px',
  },
  logoWhite: {
    marginRight: 10,
    marginTop: 20,
    height: '30px',
  },
  navButtons: {
    display: 'flex',
    alignItems: 'center',
  },
  iconButton: {
    color: '#fff !important',
  },
  button: {
    color: '#fff !important',
    textDecoration: 'none',
  },
  drawerContainer: {
    position: 'relative',
    width: 250,
    height: '100%',
    backgroundColor: '#2B2B2B', // 黒めのグレーに変更
    color: '#fff',
    overflow: 'hidden',
  },
  drawerList: {
    position: 'relative',
    zIndex: 2,
  },
  '@media (max-width: 960px)': {
    logo: {
      height: '50px',
    },
  },
  '@media (max-width: 600px)': {
    navButtons: {
      display: 'none',
    },
    logo: {
      height: '40px',
    }
  },
});

export default useStyles;
