import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Values } from './accomodation-form';


const AccomodationDetail: React.FC<Values> = (props) => {
  return <Container>
    <h1>{props.title}</h1>
  </Container>
}

export default AccomodationDetail