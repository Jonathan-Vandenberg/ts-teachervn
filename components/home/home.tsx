import { Typography, Box } from "@material-ui/core";
import * as React from "react";
import classes from "./home.module.scss";
import image from '../../images/diego-ph-fIq0tET6llw-unsplash.jpg'
import Image from 'next/image'

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

    </Box>
      <Image src={image} alt='hero-img'/>
      </>
  );
};

export default HomePage;
