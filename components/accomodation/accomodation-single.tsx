import { Button, Card, Container, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { Values } from "./accomodation-form";

const AccomodationSingle: React.FC<Values> = (props) => {
  const route = useRouter();

  const showDetailsHandler = () => {
    route.push("/" + props.id);
  };

  return (
    <Container>
      <Card>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography>{props.title}</Typography>

          <Typography paragraph={true} style={{ padding: "2rem" }}>
            {props.description}
          </Typography>

          <Typography>{props.price}</Typography>

          <Image src={props.image} alt={props.title} layout="fill" />

          <Button onClick={showDetailsHandler} variant="contained">
            Details
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default AccomodationSingle;
