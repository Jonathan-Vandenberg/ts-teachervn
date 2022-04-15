import { Box, Typography, Container } from "@material-ui/core";
import * as React from "react";
import classes from "./home.module.scss";
import image from "../../images/home.svg";
import Image from "next/image";
import imageRocket from "../../images/rocket-spaceship-start-svgrepo-com.svg";
import imageHeart from "../../images/favorite-heart-like-svgrepo-com.svg";
import imageAward from "../../images/achievement-award-badge-svgrepo-com.svg";
import imageHouse from "../../images/building-home-house-svgrepo-com.svg";
import imageChat from "../../images/chat-conversation-laptop-svgrepo-com.svg";
import imageEfficiant from "../../images/configuration-gear-options-svgrepo-com.svg";
import { motion } from "framer-motion";

type FramerHeaderVariants = {
  hidden: {
    y: number;
  };
  visible: {
    y: number;
    transition: {
      type: string;
      stiffness: number;
    };
  };
};

const homeHeaderVariants: FramerHeaderVariants = {
  hidden: {
    y: -150,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

const HomePage: React.FC = () => {
  return (
    <Container className={classes.container}>
      <Image
        style={{ zIndex: "-10" }}
        src={image}
        alt="svg-Image"
        layout="fill"
      />
      <motion.div
        variants={homeHeaderVariants as FramerHeaderVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography className={classes.title} variant="h3">
          <strong>TeacherVN</strong>
        </Typography>

        <Typography className={classes.subtitle} variant="h5">
          Connecting teachers to classrooms
        </Typography>
      </motion.div>

      <Box className={classes.info}>
        <Box className={classes.imageInfoPairLeft}>
          <Box className={classes.svgs}>
            <Image src={imageRocket} alt="find-a-job-rocket" />
          </Box>

          <Box>
            <Typography className={classes.infoItem} variant="h3">
              Apply for jobs
            </Typography>
          </Box>
        </Box>

        <Box className={classes.imageInfoPairRight}>
          <Box className={classes.svgs}>
            <Image src={imageHouse} alt="accomodation" />
          </Box>

          <Typography className={classes.infoItem} variant="h3">
            Find housing
          </Typography>
        </Box>

        <Box className={classes.imageInfoPairLeft}>
          <Box className={classes.svgs}>
            <Image src={imageHeart} alt="volunteer" />
          </Box>

          <Typography className={classes.infoItem} variant="h3">
            Volunteer
          </Typography>
        </Box>

        <Box className={classes.imageInfoPairRight}>
          <Box className={classes.svgs}>
            <Image src={imageAward} alt="boost-cv" />
          </Box>
          <Typography className={classes.infoItem} variant="h3">
            Boost your CV
          </Typography>
        </Box>

        <Box className={classes.imageInfoPairLeft}>
          <Box className={classes.svgs}>
            <Image src={imageChat} alt="language-exchange" />
          </Box>
          <Typography className={classes.infoItem} variant="h3">
            Language exchange groups
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
