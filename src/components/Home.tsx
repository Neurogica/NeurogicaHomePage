import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Box, Typography, Container } from '@mui/material';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import useStyles from './HomeStyles';
import Tab from './Tab';

const Home: React.FC = () => {
  const [showLoadingVideo, setShowLoadingVideo] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const businessSectionRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const handleLoadingVideoEnd = () => {
    setShowLoadingVideo(false);
    setTimeout(() => {
      setShowMainContent(true);
      setTimeout(() => {
        setCanScroll(true);
        clearAllBodyScrollLocks();
        if (businessSectionRef.current) {
          businessSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }, 0);
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
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fpsLimit: 60,
              particles: {
                number: { value: 100 },
                size: { value: 3 },
                move: {
                  enable: true,
                  speed: 2,
                },
                opacity: {
                  value: 0.5,
                },
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: 'repulse',
                  },
                },
                modes: {
                  repulse: {
                    distance: 100,
                  },
                },
              },
            }}
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
              <h1 className={classes.contentH1}>ニューロで、ロジカルに。</h1>
            </div>
          </div>
          <div className={classes.mainContent} ref={businessSectionRef}>
            <Container>
              <Box id="about" className={classes.section}>
                <div className={classes.aboutContainer}>
                  <Typography variant="h4" component="h2" className={classes.aboutTitle}>
                    会社概要
                  </Typography>
                  <Typography variant="body1" className={classes.aboutText}>
                    世の中では現状、再現性が必要とされている場面で、非科学的で主観的である指標をもとに判断が下される場面が数多く存在します。
                    <br />
                    例) ストレスチェック 精神科心療内科の診断 人材採用 人事異動など
                    <br />
                    ニューロジカは、これらの現状に対し、脳科学、神経科学的な先進手法で論理的かつ科学的に解決策を導くために発足しました。 
                    <br />
                    社名のニューロジカは、ニューロでロジカルに課題解決をしていこうという理念に基づいた造語です。
                  </Typography>
                </div>
              </Box>
              <Box id="services" className={classes.section}>
                <Typography variant="h4" component="h2" gutterBottom>
                  サービス一覧
                </Typography>
                <Tab />
              </Box>
              <Box id="vision" className={classes.section}>
                <div className={classes.visionContainer}>
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
                </div>
              </Box>
            </Container>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
