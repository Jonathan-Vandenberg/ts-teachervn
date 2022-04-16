import { Box } from "@material-ui/core";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import * as React from "react";
import { Values } from "./accomodation-form";
import classes from "./accomodation-list.module.scss";
import AccomodationSingle from "./accomodation-single";

interface Props extends Values {
  accs: Values[];
  acc: Values;
  key: string;
}

export default function TitlebarImageList(props: Props) {
  return (
    <Box className={classes.container}>
      {props.accs?.map((acc: Values) => (
        <ImageListItem key={props.acc.title}>
          <AccomodationSingle accs={props.acc} />
          <ImageListItemBar
            title={acc.title + ", " + acc.address}
            subtitle={acc.description}
          />
        </ImageListItem>
      ))}
    </Box>
  );
}
