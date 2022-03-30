import classes from './accomodation-single.module.scss'
import Image from 'next/image'
import { AccomodationType } from './accomodation-form'

const AccomodationSingle = (props: AccomodationType) => {
  return <section className={classes.container}>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <p>{props.price}</p>
    <Image src={props.image} alt={props.title} />
  </section>
}

export default AccomodationSingle