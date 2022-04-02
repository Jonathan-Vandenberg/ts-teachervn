import { Typography, Box } from "@material-ui/core";
import * as React from "react";
import classes from "./home.module.scss";

const HomePage: React.FC = () => {
  return (
    <Box component="section" className={classes.container}>
      <Typography className={classes.title} variant="h1">
        TeacherVN
      </Typography>

      <Typography className={classes.subtitle} variant="h4">
        Connecting teachers to classrooms
      </Typography>
    </Box>
  );
};

export default HomePage;
