import { Box } from "@material-ui/core";
import * as React from "react";
import { Values } from "./volunteer-form";
import classes from "./volunteer-list.module.scss";
import VolunteerSingle from "./volunteer-single";

interface Props {
  volunteers: Values[];
}

const TitlebarImageList: React.FC<Props> = (props) => {
  return (
    <Box className={classes.container}>
      <ul className={classes.list}>
        {props.volunteers.map((volunteer) => (
          <VolunteerSingle volunteers={volunteer} key={volunteer.id} />
        ))}
      </ul>
    </Box>
  );
};

export default TitlebarImageList;
