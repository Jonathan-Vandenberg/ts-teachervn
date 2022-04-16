import { Box, ImageListItem, ImageListItemBar } from "@material-ui/core";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Values } from "./volunteer-form";
import classes from "./volunteer-single.module.scss";
import Image from "next/image"

export interface Props {
  volunteers: Values;
}

const VolunteerSingle: React.FC<Props> = (props) => {
  const route = useRouter();

  const showDetailsHandler: () => void = () => {
    route.push("/volunteers/" + props.volunteers.id);
  };

  return (
    <ImageListItem className={classes.container} onClick={showDetailsHandler}>
      <motion.div
        className={classes.listItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.8 },
        }}
      >
        <Box className={classes.imageContainer}>
          <Image
            src={props.volunteers.image}
            alt={props.volunteers.title}
            placeholder='blur'
            // width='600 'height='400'
            layout="fill"
          />
        </Box>

        <ImageListItemBar
          title={props.volunteers.title + ", " + props.volunteers.address}
          subtitle={props.volunteers.description}
          className={classes.listItemBar}
        />
      </motion.div>
    </ImageListItem>
  );
};

export default VolunteerSingle;
