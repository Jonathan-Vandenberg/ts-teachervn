import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { NextPage } from "next/types";
import checkImage from "../../images/checked-svgrepo-com.svg";
import loveImage from "../../images/favorite-heart-like-svgrepo-com.svg";
import classes from "./volunteer-hero.module.scss";

const heroVariants = {
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

const VolunteerHero: NextPage = () => {
  return (
    <section className={classes.mainContainer}>
      <motion.div
        className={classes.content}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <Box className={classes.loveImageContainer}>
          <Image src={loveImage} alt="love-volunteers" />
        </Box>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}>
            <strong>In kindness, you can change the world</strong>
          </Typography>
        </Box>
      </motion.div>

      <Box className={classes.subtitleContainer}>
        <Box className={classes.subtitleItem}>
          <Box className={classes.imageContainer}>
            <Image src={checkImage} alt="green-check" />
          </Box>

          <Typography className={classes.subtitle}>Boosts your CV</Typography>
        </Box>

        <Box className={classes.subtitleItem}>
          <Box className={classes.imageContainer}>
            <Image src={checkImage} alt="green-check" />
          </Box>

          <Typography className={classes.subtitle}>
            Expand your network
          </Typography>
        </Box>

        <Box className={classes.subtitleItem}>
          <Box className={classes.imageContainer}>
            <Image src={checkImage} alt="green-check" />
          </Box>

          <Typography className={classes.subtitle}>
            Become a better teacher
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default VolunteerHero;
