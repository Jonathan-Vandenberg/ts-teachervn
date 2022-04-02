import { Box } from "@material-ui/core";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import * as React from "react";
import { Values } from "./accomodation-form";
import classes from "./accomodation-list.module.scss";
import AccomodationSingle from "./accomodation-single";

const TitlebarImageList: React.FC<Values> = (props) => {
  return (
    <Box className={classes.container}>
      {props.accs.map((acc) => (
        <ImageListItem key={acc.id}>
          <AccomodationSingle accs={acc} />
          <ImageListItemBar
            title={acc.title + ", " + acc.address}
            subtitle={acc.description}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${acc.title}`}
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
