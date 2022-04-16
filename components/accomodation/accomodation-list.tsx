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
}

export default function TitlebarImageList(props: Props) {
  return (
    <Box className={classes.container}>
      {props.accs?.map((acc: Values) => (
        <ImageListItem key={props.acc.id}>
          <AccomodationSingle
            accs={props.acc}
            title={""}
            description={""}
            price={""}
            address={""}
            duration={""}
            image={""}
            id={""}
          />
          <ImageListItemBar
            title={acc.title + ", " + acc.address}
            subtitle={acc.description}
          />
        </ImageListItem>
      ))}
    </Box>
  );
}
