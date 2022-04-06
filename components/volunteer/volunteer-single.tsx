import { Container } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { Values } from "./volunteer-form";
import classes from "./volunteer-single.module.scss";

const VolunteerSingle: React.FC<Values> = (props) => {
  const route = useRouter();

  const showDetailsHandler: () => void = () => {
    route.push("/volunteers/" + props.volunteers.id);
  };

  return (
    <Container onClick={showDetailsHandler} className={classes.container}>
      <Image
        className={classes.image}
        src={props.volunteers.image}
        alt={props.volunteers.title}
        layout="fill"
      />
    </Container>
  );
};

export default VolunteerSingle;
