import { ClassNames } from "@emotion/react";
import { Container } from "@material-ui/core";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import * as React from "react";
import { Values } from "./accomodation-form";
import classes from "./accomodation-list.module.scss";
import Image from "next/image";

const TitlebarImageList: React.FC<Values> = (props) => {
  return (
    <ImageList
      style={{
        width: "100%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem",
      }}
    >
      {props.accs.map((acc) => (
        <ImageListItem key={acc.id}>
          <img src={acc.image} alt={acc.title} loading="lazy" layout="fill" />
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
    </ImageList>
  );
};

export default TitlebarImageList;