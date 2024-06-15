import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <ReactPlayer
        url={process.env.PUBLIC_URL + '/movies/neurogica_homepage_10s.mp4'}
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="react-player"
      />
      <div className="content">
        <h1>Welcome to Neurogica</h1>
      </div>
      <Box className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/neural_hr.jpg"
            alt="Neural HR"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Neural HR
            </Typography>
            <Typography variant="body2" color="text.secondary">
              脳科学とAIを使った直接的な人財と企業のマッチング
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/mental_monitoring.jpg"
            alt="Mental Monitoring"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              精神状態のモニタリング
            </Typography>
            <Typography variant="body2" color="text.secondary">
              脳科学とAIを用いて感情やストレス値、疲労度を算出し、客観的に精神状態をモニタリング
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/depression_detection.jpg"
            alt="Depression Detection"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              うつ傾向の捉え
            </Typography>
            <Typography variant="body2" color="text.secondary">
              簡易的な脳波デバイスからうつ傾向を正確に判定するためのAIモデルの開発
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/ai_development.jpg"
            alt="AI Development"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              AIに関する受託開発
            </Typography>
            <Typography variant="body2" color="text.secondary">
              言語や画像のマルチモーダルなAIに関する受託開発
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default Home;
