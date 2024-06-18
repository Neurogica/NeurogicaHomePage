import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  homeContainer: {
    position: 'relative',
    minHeight: '100vh',
    width: '100vw',
    overflowX: 'hidden',
    backgroundColor: '#1E2225',
    zIndex: 1,
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    zIndex: -2,
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(30, 34, 37, 0.7)',
    zIndex: -1,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#e0e0e0',
    zIndex: 1,
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  contentH1: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  mainContent: {
    padding: '4rem 0',
    color: 'white',
    // backgroundColor: '#1E2225',
    backgroundColor: 'rgba(30, 34, 37, 0.7)',
  },
  section: {
    marginBottom: '4rem',
  },
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  aboutTitle: {
    marginBottom: '1rem',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#e0e0e0',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  aboutText: {
    maxWidth: '1000px',
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#dedede',
  },
  visionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  visionTitle: {
    marginBottom: '1rem',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#e0e0e0',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  visionText: {
    maxWidth: '800px',
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#dedede'
  },
  particlesBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  starsBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -3,
  },
});

export default useStyles;
