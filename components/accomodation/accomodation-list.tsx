import { Grid } from '@material-ui/core'
import * as React from 'react'
import { Values } from './accomodation-form'
import classes from './accomodation-list.module.scss'
import AccomodationSingle from './accomodation-single'


const AccList: React.FC<Values> = (props) => {
  return (
    <>
      <Grid
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
              >
        {props.accs.map((acc) => (
          <li key={acc.id} className={classes.li}>
            <AccomodationSingle
              title={acc.title}
              address={acc.address}
              description={acc.description}
              duration={acc.duration}
              price={acc.price}
              notes={acc.notes}
              image={acc.image}
              id={acc.id}
            />
          </li>
        ))}
      </Grid>
    </>
  )
}

export default AccList
