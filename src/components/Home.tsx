import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Container, Typography, Box } from '@mui/material';
import useStyles from './HomeStyles';
import Tab from './Tab';
import Stars from './Stars';  // Starsコンポーネントをインポート
import GlassCard from './GlassCard';  // GlassCardコンポーネントをインポート
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

const Home: React.FC = () => {
  const [showLoadingVideo, setShowLoadingVideo] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const businessSectionRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const handleLoadingVideoEnd = () => {
    setShowLoadingVideo(false);
    setShowMainContent(true);
    setCanScroll(true);
    clearAllBodyScrollLocks();
  };

  useEffect(() => {
    if (!canScroll && targetRef.current) {
      disableBodyScroll(targetRef.current);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [canScroll]);

  return (
    <div className={classes.homeContainer} ref={targetRef}>
      {showLoadingVideo && (
        <div className={classes.videoContainer}>
          <ReactPlayer
            url={process.env.PUBLIC_URL + '/movies/neurogica_homepage_loading1_x2.2.mp4'}
            playing
            muted
            width="100%"
            height="100vh"
            onEnded={handleLoadingVideoEnd}
            className={classes.reactPlayer}
          />
        </div>
      )}
      {showMainContent && (
        <>
          <div className={classes.videoContainer}>
            <ReactPlayer
              url={process.env.PUBLIC_URL + '/movies/neurogica_homepage_10s.mp4'}
              playing
              loop
              muted
              width="100%"
              height="100vh"
              className={classes.reactPlayer}
            />
            <div className={classes.videoOverlay}></div>
            <div className={classes.content}>
              <Box className={classes.logoContainer}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/neurogica_logo_transparent.png`}
                  alt="Neurogica logo transparent"
                  className={classes.logoTransparent}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/neurogica_logo_white.png`}
                  alt="Neurogica logo white"
                  className={classes.logoWhite}
                />
              </Box>
              <h1 className={classes.contentH1}>ニューロで、ロジカルに。</h1>
            </div>
          </div>
          <div className={classes.mainContent} ref={businessSectionRef}>
            <Container>
              <Box id="about" className={classes.section}>
                <GlassCard width="85%" height="auto">
                  <Typography variant="h4" component="h2" className={classes.aboutTitle}>
                    会社概要
                  </Typography>
                  <Typography variant="body1" className={classes.aboutText}>
                    世の中では現状、再現性が必要とされている場面で、非科学的で主観的である指標をもとに判断が下される場面が数多く存在します。
                    <br />
                    例) ストレスチェック 精神科心療内科の診断 人材採用 人事異動など
                    <br />
                    ニューロジカはこれらの現状に対し、脳科学とAIを組み合わせた先進手法で論理的かつ科学的に解決策を導くために発足しました。 
                    <br />
                    社名のニューロジカは、ニューロでロジカルに課題解決をしていこうという理念に基づいた造語です。
                  </Typography>
                </GlassCard>
              </Box>
              <Box id="services" className={classes.section}>
                <Typography variant="h4" component="h2" gutterBottom>
                  サービス一覧
                </Typography>
                <Tab />
              </Box>
              <Box id="vision" className={classes.section}>
                <GlassCard width="85%" height="auto">
                  <Typography variant="h4" component="h2" className={classes.visionTitle}>
                    ビジョン
                  </Typography>
                  <Typography variant="body1" className={classes.visionText}>
                    ビジョン：「脳科学が当たり前になる社会を創る。」
                    <br />
                    現在非科学的な実社会の中で、広く脳科学が用いられ、 
                    <br />
                    Neuroビッグデータを用いたAI解析による価値提供を続け、新しい社会の構築を目指します。
                  </Typography>
                </GlassCard>
              </Box>
            </Container>
            <div className={classes.starsBackground}>
              <Stars />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
