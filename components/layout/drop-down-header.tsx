import { Box, Button } from "@material-ui/core";
import Link from "next/link";
import classes from "./drop-down-header.module.scss";

const DropdownNav = () => {
  return (
    <Box className={classes.container}>
      <Link href="/" passHref>
        <Button>Home</Button>
      </Link>
      <Link href="/schools" passHref>
        <Button>Schools</Button>
      </Link>
      <Link href="/accomodation" passHref>
        <Button>Accomodation</Button>
      </Link>
      <Link href="/volunteer">
        <Button>Volunteer</Button>
      </Link>
      <Link href="/language-exchange">
        <Button>Language Exchange</Button>
      </Link>
      <Link href="/accreditation">
        <Button>Accreditation</Button>
      </Link>
      <Link href="/best-practices">
        <Button>Best practices</Button>
      </Link>
    </Box>
  );
};

export default DropdownNav;
