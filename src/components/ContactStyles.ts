import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  contactContainer: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingTop: '5%', // ヘッダーの高さ分のパディングを追加
  },
  starsBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  formContainer: {
    position: 'relative',
    zIndex: 1,
    padding: '20px',
    // backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(3px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto',
  },
  section: {
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    color: '#fff', // タイトルの色を白に変更
  },
  description: {
    marginBottom: '20px',
    color: '#fff', // 説明の色を白に変更
  },
  iframe: {
    width: '100%',
    border: 'none',
  },
});

export default useStyles;