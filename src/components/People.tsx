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
      description: "15歳で起業、4事業を立ち上げる。脳波研究、ゴルフ連盟会長等活動は多岐にわたる。",
    },
    {
      title: "CTO",
      name: "長嶋隼矢",
      description: "AI技術開発および豊富なエンジニアリング経験。",
    },
    {
      title: "開発者",
      name: "西村",
      description: "優れたコーディングスキルを持ち、プロジェクトに貢献する才能ある開発者です。",
    },
    {
      title: "開発者",
      name: "平野",
      description: "全ての技術的側面が円滑に機能するように尽力する献身的な開発者です。",
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
