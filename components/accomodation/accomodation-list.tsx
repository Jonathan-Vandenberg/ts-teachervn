import { Box } from "@material-ui/core";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import * as React from "react";
import { Values } from "./accomodation-form";
import classes from "./accomodation-list.module.scss";
import AccomodationSingle from "./accomodation-single";

interface Props {
  accs?: Values[];
}

export default function TitlebarImageList ({ accs }: Props) {
  return (
    <Box className={classes.container}>
      {accs?.map((acc) => (
        <ImageListItem key={acc.id}>
          <AccomodationSingle accs={acc} />
          <ImageListItemBar
            title={acc.title + ", " + acc.address}
            subtitle={acc.description}
          />
        </ImageListItem>
      ))}
    </Box>
  );
};
