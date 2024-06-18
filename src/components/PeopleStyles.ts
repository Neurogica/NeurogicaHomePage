import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  peopleContainer: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingTop: '64px', // ヘッダーの高さ分のパディングを追加
  },
  starsBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  peopleSection: {
    position: 'relative',
    zIndex: 1,
    padding: '5%',
    marginTop: '3%',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
  },
  peopleTitle: {
    marginBottom: '20px',
    color: '#fff', // タイトルの色を白に変更
  },
  memberContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  peopleCard: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // カード内の文字を白に変更
  },
  memberName: {
    marginBottom: '10px',
    color: '#fff', // 名前の色を白に変更
  },
  memberDescription: {
    marginBottom: '20px',
    color: '#fff', // 説明の色を白に変更
  },
  allMembersPhotoContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  allMembersPhoto: {
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
  },
  photoDescription: {
    marginTop: '10px',
    color: '#fff', // 写真の下の説明文の色を白に変更
  },
  liquidUI: {
    width: '100%', // 幅を100%に設定
    height: '300px', // 高さを300pxに設定
    background: 'linear-gradient(90deg, #18384A, #569297)',
    borderRadius: '27% 69% 40% 46%',
    animation: '$move 10s linear infinite',
  },
  '@keyframes move': {
    '0%': {
      borderRadius: '27% 69% 40% 46%',
    },
    '16.666%': {
      borderRadius: '35% 65% 45% 50%',
    },
    '33.333%': {
      borderRadius: '45% 55% 50% 50%',
    },
    '50%': {
      borderRadius: '55% 50% 55% 50%',
    },
    '66.666%': {
      borderRadius: '65% 45% 60% 40%',
    },
    '83.333%': {
      borderRadius: '32% 69% 40% 46%',
    },
    '100%': {
      borderRadius: '27% 55% 35% 40%',
    },
  },
});

export default useStyles;
