import { Button, Card, Container, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { Values } from "./accomodation-form";
import classes from './accomodation-single.module.scss'

const AccomodationSingle: React.FC<Values> = (props) => {
  const route = useRouter();

  const showDetailsHandler = () => {
    route.push("/" + props.id);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <Grid
        className={classes.grid}
          container
          
        >
          <Typography className={classes.title}>{props.title}</Typography>

          <Typography className={classes.description} paragraph={true} style={{ padding: "2rem" }}>
            {props.description}
          </Typography>

          <Typography className={classes.price}>{props.price}</Typography>

          <Image className={classes.image} src={props.image} alt={props.title} layout="fill" />

          <Button className={classes.button} onClick={showDetailsHandler} variant="contained">
            Details
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default AccomodationSingle;
