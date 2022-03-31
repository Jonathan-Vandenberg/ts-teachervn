import { Button, Container } from '@material-ui/core'
import { useRouter } from 'next/router'
import * as React from 'react'

const HomePage: React.FC = () => {
  const router = useRouter()

  return <Container>
    <Button onClick={()=>{router.push('/new-accomodation')}}>Accomodation</Button>
  </Container>
}

export default HomePage