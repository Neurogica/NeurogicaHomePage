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
});

export default useStyles;
