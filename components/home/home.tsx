import { Box, Typography, Container } from "@material-ui/core";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import * as React from "react";
import classes from "./home.module.scss";

const HomePage: React.FC<Session> = () => {
  const { data: session, status } = useSession();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} variant="h3">
        TeacherVN
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        Connecting teachers to classrooms
      </Typography>

      <Typography
        style={{ paddingTop: "3rem" }}
        className={classes.welcome}
        variant="h6"
      >
        Welcome {`${session?.user?.name}`}
      </Typography>

      <Box className={classes.info}>
        <Typography className={classes.infoItem} variant="h6">
          Apply for a job then find accomodation near your new school
        </Typography>
        <Typography className={classes.infoItem} variant="h6">
          Volunteer your time and skills for good energy and work experience
        </Typography>
        <Typography className={classes.infoItem} variant="h6">
          Learn the most efficient ways to adjust to living in a foreign country
        </Typography>
        <Typography className={classes.infoItem} variant="h6">
          Boost your CV with certification and experience
        </Typography>
        <Typography className={classes.infoItem} variant="h6">
          Learn the local language through language exhange groups
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
