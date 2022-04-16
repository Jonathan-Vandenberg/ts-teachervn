import { Box, Container, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import imageAward from "../../images/achievement-award-badge-svgrepo-com.svg";
import imageHouse from "../../images/building-home-house-svgrepo-com.svg";
import imageChat from "../../images/chat-conversation-laptop-svgrepo-com.svg";
import imageHeart from "../../images/favorite-heart-like-svgrepo-com.svg";
import imageRocket from "../../images/rocket-spaceship-start-svgrepo-com.svg";
import classes from "./home.module.scss";

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
    <Container className={classes.container} maxWidth={false}>
      <Typography className={classes.title} variant="h3">
        <strong>TeacherVN</strong>
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        Connecting teachers to classrooms
      </Typography>

      <Box className={classes.info}>
        <Box className={classes.imageInfoPairLeft}>
          <motion.div
            className={classes.svgs}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: 100 },
            }}
          >
            <Image src={imageRocket} alt="find-a-job-rocket" />
          </motion.div>

          <motion.div
            className={classes.svgs}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: -100 },
            }}
          >
            <Typography className={classes.infoItem} variant="h3">
              Apply for jobs
            </Typography>
          </motion.div>
        </Box>

        <Box className={classes.imageInfoPairRight}>
          <motion.div
            className={classes.svgs}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: -100 },
            }}
          >
            <Image src={imageHouse} alt="accomodation" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: 100 },
            }}
          >
            <Typography className={classes.infoItem} variant="h3">
              Find housing
            </Typography>
          </motion.div>
        </Box>

        <Box className={classes.imageInfoPairLeft}>
          <motion.div
            className={classes.svgs}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: 100 },
            }}
          >
            <Image src={imageHeart} alt="volunteer" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: -100 },
            }}
          >
            <Typography className={classes.infoItem} variant="h3">
              Volunteer
            </Typography>
          </motion.div>
        </Box>

        <Box className={classes.imageInfoPairRight}>
          <motion.div
            className={classes.svgs}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: -100 },
            }}
          >
            <Image src={imageAward} alt="boost-cv" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: 100 },
            }}
          >
            <Typography className={classes.infoItem} variant="h3">
              Boost your CV
            </Typography>
          </motion.div>
        </Box>

        <Box className={classes.imageInfoPairLeft}>
          <motion.div
            className={classes.svgs}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: 100 },
            }}
          >
            <Image src={imageChat} alt="language-exchange" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: -100 },
            }}
          >
            <Typography className={classes.infoItem} variant="h3">
              Language exchange groups
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
