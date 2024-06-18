import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#1E2225 !important', // カスタムカラー
  },
  logo: {
    marginRight: 10,
    height: '50px',
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
    color: '#fff !important', // 強制的に白色に設定
    textDecoration: 'none', // リンクのテキストデコレーションを無効にする
  },
});

export default useStyles;
