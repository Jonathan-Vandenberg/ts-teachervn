import { Box } from "@material-ui/core";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import * as React from "react";
import { Values } from "./school-form";
import classes from "./school-list.module.scss";
import SchoolSingle from "./school-single";
import { motion } from "framer-motion";

interface Schools {
  schools: Values[];
}

const TitlebarImageList: React.FC<Schools> = (props) => {
  return (
    <Box className={classes.container}>
      {props.schools.map((school: Values) => (
        <ImageListItem className={classes.listItem} key={school.id}>
          <motion.div
            className={classes.listItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.8 },
            }}
          >
            <SchoolSingle schools={school} />
            <ImageListItemBar
              className={classes.listItem}
              title={school.title + ", " + school.address}
              subtitle={school.description}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${school.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </motion.div>
        </ImageListItem>
      ))}
    </Box>
  );
};

export default TitlebarImageList;
