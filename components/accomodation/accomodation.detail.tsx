import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Values } from './accomodation-form';


const AccomodationDetail: React.FC<Values> = (props)  => {
  return <Container>
          <Typography variant="h5" component="h2">{props.title}</Typography>
          <Typography variant="h5" component="h2">{props.address}</Typography>
          <Typography variant="h5" component="h2">{props.price}</Typography>
          <img src={props.image} alt={props.title}/>
        </Container>
}

export default AccomodationDetail