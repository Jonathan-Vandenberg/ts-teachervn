import { Typography, Box } from "@material-ui/core";
import * as React from "react";
import classes from "./home.module.scss";
import headerSvg from "../../images/homesvg.svg";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <>
      <Box component="section" className={classes.container}>
        <Typography className={classes.title} variant="h1">
          TeacherVN
        </Typography>

        <Typography className={classes.subtitle} variant="h4">
          Connecting teachers to classrooms
        </Typography>

        <Box className={classes.info}>
          <Typography className={classes.infoItem} variant="h6">
            Apply for a job then find accomodation near your new school
          </Typography>
          <Typography className={classes.infoItem} variant="h6">
            Volunteer your time and skills for good energy and work experience
          </Typography>
          <Typography className={classes.infoItem} variant="h6">
            Learn the most efficient ways to adjust to living in a foreign
            country
          </Typography>
          <Typography className={classes.infoItem} variant="h6">
            Boost your CV with certification and experience
          </Typography>
          <Typography className={classes.infoItem} variant="h6">
            Learn the local language through language exhange groups
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
