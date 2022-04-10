import { Box } from "@material-ui/core";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import * as React from "react";
import { Values } from "./school-form";
import classes from "./school-list.module.scss";
import SchoolSingle from "./school-single";

const TitlebarImageList: React.FC<Values> = (props) => {
  return (
    <Box className={classes.container}>
      {props.schools.map((school) => (
        <ImageListItem className={classes.listItem} key={school.id}>
          <SchoolSingle schools={school} />
          <ImageListItemBar
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
        </ImageListItem>
      ))}
    </Box>
  );
};

export default TitlebarImageList;
