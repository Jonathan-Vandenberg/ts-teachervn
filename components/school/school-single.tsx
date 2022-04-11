import { Container } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { Values } from "./school-form";
import classes from "./school-single.module.scss";

const SchoolSingle: React.FC<Values> = (props) => {
  const route = useRouter();

  const showDetailsHandler = () => {
    route.push("/schools/" + props.schools.id);
  };

  return (
    <Container
      component="div"
      onClick={showDetailsHandler}
      className={classes.container}
    >
      <Image
        className={classes.image}
        src={props.schools.image}
        alt={props.schools.title}
        layout="fill"
      />
    </Container>
  );
};

export default SchoolSingle;
