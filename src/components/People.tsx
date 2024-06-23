import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import useStyles from './PeopleStyles';
import Stars from './Stars'; // Starsコンポーネントをインポート

const People: React.FC = () => {
  const classes = useStyles();

  const members = [
    {
      title: "CEO",
      name: "ピーク・エイダン・ゼファー",
      description: "明治大学在学中。15歳で起業、4事業を立ち上げる。脳波研究、ゴルフ連盟会長等活動は多岐にわたる。",
    },
    {
      title: "CTO",
      name: "長嶋隼矢",
      description: "慶應義塾大学大学院在学中。脳波をはじめとし、マルチモーダル言語処理、ロボティクス、時系列解析を含む様々な領域へのAI応用、研究に携わる。",
    },
    {
      title: "開発",
      name: "西村喬行",
      description: "慶應義塾大学大学院在学中。マルチモーダル言語処理、音声認識、CV、LLMに精通。",
    },
    {
      title: "開発",
      name: "平野愼之助",
      description: "慶應義塾大学大学院在学中。マルチモーダル言語処理、AI・機械学習の説明性、説明生成に精通。",
    },
  ];

  return (
    <div className={classes.peopleContainer}>
      <div className={classes.starsBackground}>
        <Stars />
      </div>
      <Container>
        <Box className={classes.peopleSection}>
          <Typography variant="h4" component="h2" className={classes.peopleTitle}>
            チームメンバー
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {members.map((member, index) => (
              <Grid item key={index} xs={12} md={6} className={classes.memberContainer}>
                <div className={classes.liquidUI}>
                  <Box className={classes.peopleCard}>
                    <Typography variant="h6" component="h3" className={classes.memberName}>
                      {`${member.title} ${member.name}`}
                    </Typography>
                    <Typography variant="body1" className={classes.memberDescription}>
                      {member.description}
                    </Typography>
                  </Box>
                </div>
              </Grid>
            ))}
          </Grid>
          <Box className={classes.allMembersPhotoContainer}>
            <img src={`${process.env.PUBLIC_URL}/images/member.jpg`} alt="All Members" className={classes.allMembersPhoto} />
            <Typography variant="body1" className={classes.photoDescription}>
              左から西村、長嶋(CTO)、ゼファー(CEO)、平野
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default People;
