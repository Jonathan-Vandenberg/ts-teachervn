import { Typography, Card, Container, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import { Values } from "./school-form";
import classes from "./school-detail.module.scss";

const SchoolDetail: React.FC<Values> = (props) => {
  const mapSearch = () => {
    window.open(
      "https://www.google.com/maps/search/" +
        props.address
          .replace(/\s+/g, "+")
          .replace(/\/+/g, "%2F")
          .toLowerCase()
          .trim()
    );
  };

  return (
    <Box className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={props.image} alt={props.title} />
      </div>

      <ul className={classes.content}>
        <li className={classes.title}>
          <h1>{props.title}</h1>
        </li>
        <ul className={classes.addressContainer}>
          <li className={classes.addressBtn}>
            <Button
              className={classes.btn}
              variant="outlined"
              onClick={() => mapSearch()}
              color="secondary"
            >
              View Map
            </Button>
          </li>

          <li className={classes.address}>
            <p>
              <i>
                <strong>{props.address}</strong>
              </i>
            </p>
          </li>
        </ul>

        <li className={classes.description}>
          <p>{props.description}</p>
        </li>

        <li className={classes.duration}>
          <p>{props.duration}</p>
        </li>

        <li className={classes.pay}>
          <p>{props.pay}</p>
        </li>

        <li className={classes.notes}>
          <p>{props.notes}</p>
        </li>
      </ul>

      <div className={classes.buttonContainer}>
        <div className={classes.btn}>
          <div className={classes.btn}>
            <Button
              href="mailto:jonvdberg8@gmail.com"
              variant="outlined"
              color="primary"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default SchoolDetail;