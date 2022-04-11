import { Container } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { Values } from "./accomodation-form";
import classes from "./accomodation-single.module.scss";

interface Props {
  accs?: Values;
}

const AccomodationSingle: React.FC<Props> = (props) => {
  const route = useRouter();

  const showDetailsHandler: () => void = () => {
    route.push("/accomodation/" + props?.accs?._id);
  };

  return (
    <Container onClick={showDetailsHandler} className={classes.container}>
      <Image
        className={classes.image}
        src={props.accs?.image}
        alt={props.accs?.title}
        layout="fill"
      />
    </Container>
  );
};

export default AccomodationSingle;
