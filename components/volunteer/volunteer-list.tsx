import { Box } from "@material-ui/core";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import * as React from "react";
import { Values } from "./volunteer-form";
import classes from "./volunteer-list.module.scss";
import VolunteerSingle from "./volunteer-single";

const TitlebarImageList: React.FC<Values> = (props) => {
  return (
    <Box className={classes.container}>
      {props.volunteers.map((volunteer) => (
        <ImageListItem key={volunteer.id}>
          <VolunteerSingle volunteers={volunteer} />
          <ImageListItemBar
            title={volunteer.title + ", " + volunteer.address}
            subtitle={volunteer.description}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${volunteer.title}`}
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
