import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import classes from "./school-detail.module.scss";
import { Values } from "./school-form";
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const SchoolDetail: React.FC<Values> = (props) => {
  const session = useSession();
  const router = useRouter()

  const mapSearch = () => {
    window.open(
      "https://www.google.com/maps/search/" +
        props.address
          .replace(/\s+/g, "+")
          .replace(/\/+/g, "%2F")
          .toLowerCase()
          .trim()
    );
  };

  return (
    <Box className={classes.container}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={props.image} alt={props.title} />
      </div>

      <ul className={classes.content}>
        <li className={classes.title}>
          <h1>{props.title}</h1>
        </li>
        <ul className={classes.addressContainer}>
          <li className={classes.addressBtn}>
            <Button
              className={classes.btn}
              variant="outlined"
              onClick={() => mapSearch()}
              color="secondary"
            >
              View Map
            </Button>
          </li>

          <li className={classes.address}>
            <p>
              <i>
                <strong>{props.address}</strong>
              </i>
            </p>
          </li>
        </ul>

        <li className={classes.description}>
          <p>{props.description}</p>
        </li>

        <li className={classes.duration}>
          <p>{props.duration}</p>
        </li>

        <li className={classes.pay}>
          <p>{props.pay}</p>
        </li>

        <li className={classes.notes}>
          <p>{props.notes}</p>
        </li>
      </ul>

      <div className={classes.buttonContainer}>
        {session.status === 'authenticated' ? <Button
          href="mailto:jonvdberg8@gmail.com"
          variant="outlined"
          color="primary"
        >
          Contact
        </Button> : <Button onClick={()=> router.push('/login')} variant="outlined">Login To Contact School</Button>}
      </div>
    </Box>
  );
};

export default SchoolDetail;
