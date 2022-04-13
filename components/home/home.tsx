import { Box, Typography, Container } from "@material-ui/core";
import * as React from "react";
import classes from "./home.module.scss";
import image from "../../images/home.svg";
import Image from "next/image";
import imageRocket from '../../images/rocket-spaceship-start-svgrepo-com.svg'
import imageHeart from '../../images/favorite-heart-like-svgrepo-com.svg'
import imageAward from '../../images/achievement-award-badge-svgrepo-com.svg'
import imageHouse from '../../images/building-home-house-svgrepo-com.svg'
import imageChat from '../../images/chat-conversation-laptop-svgrepo-com.svg'
import imageEfficiant from '../../images/configuration-gear-options-svgrepo-com.svg'
import { motion } from 'framer-motion'
import { dividerClasses } from "@mui/material";

const HomePage: React.FC = () => {

  return (
    <Container className={classes.container}>
      <Image
        style={{ zIndex: "-10" }}
        src={image}
        alt="svg-Image"
        layout="fill"
      />

      <Typography className={classes.title} variant="h3">
        <strong>TeacherVN</strong>
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        Connecting teachers to classrooms
      </Typography>

      
      <Typography
        style={{ paddingTop: "3rem" }}
        className={classes.welcome}
        variant="h6"
      >
        {/* { Welcome {`${session?.user?.name}`}} */}
      </Typography>

      <Box className={classes.info}>
        <Box className={classes.imageInfoPairLeft}>
          <motion.div className={classes.svgs}
        translate-y={{ y: 20 }}
        animate={{ opacity: 1, z: 0 }}
        initial={{ opacity: 0, z: '-100vw' }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}>
            <Image src={imageRocket} alt='find-a-job-rocket' style={{width: '300px', height: '300px'}} />
          </motion.div>
          <Box>
            <Typography 
        translate-y={{ y: 20 }}
        animate={{ opacity: 1, z: 0 }}
        initial={{ opacity: 0, z: '-100vw' }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }} className={classes.infoItem} component={motion.div} variant="h6">
            Apply for jobs
          </Typography>
          </Box>
        </Box>

        <Box className={classes.imageInfoPairRight}>
          <motion.div className={classes.svgs} 
        translate-y={{ y: 20 }}
        animate={{ opacity: 1, z: 0 }}
        initial={{ opacity: 0, z: '-100vw' }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}>
            <Image src={imageHouse} alt='accomodation' style={{width: '300px', height: '300px'}} />
          </motion.div>
          <Typography 
        translate-y={{ y: 20 }}
        animate={{ opacity: 1, z: 0 }}
        initial={{ opacity: 0, z: '-100vw' }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }} className={classes.infoItem} component={motion.div} variant="h6">
            Find accomodation
          </Typography>
        </Box>
        
        <Box className={classes.imageInfoPairLeft}>
          <motion.div  layout
        translate-y={{ y: 20 }}
        animate={{ opacity: 1, z: 0 }}
        initial={{ opacity: 0, z: '-100vw' }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }} className={classes.svgs}>
            <Image src={imageHeart} alt='volunteer' style={{width: '300px', height: '300px'}} />
          </motion.div>
          <Typography layout
        translate-y={{ y: 20 }}
        animate={{ opacity: 1, z: 0 }}
        initial={{ opacity: 0, z: '-100vw' }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }} component={motion.div} className={classes.infoItem} variant="h6">
            Volunteer
          </Typography>
        </Box>
        
        <Box className={classes.imageInfoPairRight}>
          <Box className={classes.svgs}>
            <Image src={imageEfficiant} alt='adjust-to-a-new-country' style={{width: '300px', height: '300px'}} />
          </Box>
          <Typography className={classes.infoItem} variant="h6">
            Living in a foreign country
          </Typography>
        </Box>
        
        <Box className={classes.imageInfoPairLeft}>
          <Box className={classes.svgs}>
          <Image src={imageAward} alt='boost-cv' style={{width: '300px', height: '300px'}} />
          </Box>
          <Typography className={classes.infoItem} variant="h6">
            Boost your CV
          </Typography>
        </Box>
        
        <Box className={classes.imageInfoPairRight}>
          <Box className={classes.svgs}>
          <Image src={imageChat} alt='language-exchange' style={{width: '300px', height: '300px'}} />
          </Box>
          <Typography className={classes.infoItem} variant="h6">
            Language exchange groups
          </Typography>
        </Box>
        
      </Box>
    </Container>
  );
};

export default HomePage;
