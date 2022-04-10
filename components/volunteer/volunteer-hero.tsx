import { motion } from "framer-motion";
import Image from "next/image";
import image from "../../images/pexels-pixabay-271816.jpg";
import classes from "./volunteer-hero.module.scss";

const VolunteerHero: React.FC = (props) => {
  return (
    <section className={classes.container}>
      <motion.h1
        className={classes.title}
        layout
        translate-y={{ y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        In kindness, you can change the world.
      </motion.h1>

      <Image className={classes.image} src={image} alt="volunteer-hero" />

      <p className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
        nunc eget nunc efficitur efficitur. Vestibulum eget nunc eget nunc
        efficitur efficitur.
      </p>
    </section>
  );
};

export default VolunteerHero;
