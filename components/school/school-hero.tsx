import { motion } from "framer-motion";
import classes from "./school-hero.module.scss";

const SchoolHero: React.FC = (props) => {
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
        Find a teaching job...
      </motion.h1>

      <p className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
        nunc eget nunc efficitur efficitur. Vestibulum eget nunc eget nunc
        efficitur efficitur.
      </p>
    </section>
  );
};

export default SchoolHero;
