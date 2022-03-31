import { Button, Card, Container, Typography, Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import { Values } from './accomodation-form'

const AccomodationSingle: React.FC<Values> = (props) => {
  const route = useRouter()
  
  const showDetailsHandler = () => {
    route.push('/' + props.id)
  }

  return <Container>
    <Card>
      <Grid
      container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ padding: '2rem 0' }}
                
      >
    <Typography>{props.title}</Typography>
    <Typography paragraph={true} style={{ padding: '2rem'}}>{props.description}</Typography>
    <Typography>{props.price}</Typography>
    <img src={props.image} alt={props.title} style={{width: '100%', height: 'auto'}} />
    <Button onClick={showDetailsHandler} variant='contained'>Details</Button>
    </Grid>
    </Card>
  </Container>
}

export default AccomodationSingle