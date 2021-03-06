import { motion } from "framer-motion";
import classes from "./accomodation-hero.module.scss";

const AccomodationHero: React.FC = () => {
  return (
    <>
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
          Feel At Home...
        </motion.h1>

        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          eget nunc eget nunc efficitur efficitur. Vestibulum eget nunc eget
          nunc efficitur efficitur.
        </p>
      </section>
    </>
  );
};

export default AccomodationHero;
