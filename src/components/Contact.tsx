import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import useStyles from './ContactStyles';
import Stars from './Stars'; // Starsコンポーネントをインポート

const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.contactContainer}>
      <div className={classes.starsBackground}>
        <Stars />
      </div>
      <Container className={classes.formContainer}>
        {/* <Box className={classes.section}> */}
          {/* <Typography variant="h4" component="h2" className={classes.title}>
            お問い合わせ
          </Typography>
          <Typography variant="body1" className={classes.description}>
            お問い合わせ先の詳細情報をここに記述します。
          </Typography> */}
          <iframe 
            title="お問い合わせフォーム" 
            src="https://forms.gle/ErvwbLgxXwsJfU5bA" 
            width="100%" 
            height="800" 
            frameBorder="0"
            className={classes.iframe}
          >読み込み中…</iframe>
        {/* </Box> */}
      </Container>
    </div>
  );
}

export default Contact;