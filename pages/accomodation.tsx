import { MongoClient } from "mongodb";
import Head from "next/head";
import * as React from "react";
import { Values } from "../components/accomodation/accomodation-form";
import AccomodationHero from "../components/accomodation/accomodation-hero";
import TitlebarImageList from "../components/accomodation/accomodation-list";

interface Props extends Values {
  _id: string;
  accs: Values[];
}

const Accomodation: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Head>
        <title>Accomodation</title>
        <meta
          name="description"
          content="Find accomodation for the duration of your contract."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {<AccomodationHero />} */}
      <TitlebarImageList accs={props.accs} acc={{
        title: "",
        description: "",
        price: "",
        address: "",
        duration: "",
        notes: undefined,
        image: "",
        id: ""
      }} title={""} description={""} price={""} address={""} duration={""} image={""} id={""} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(`${process.env.ACCOMODATION_KEY}`);

  const db = client.db();

  const accCollection = db.collection("accomodation");

  const accs = await accCollection.find().toArray();

  client.close();

  return {
    props: {
      accs: accs.map((acc) => ({
        title: acc.title,
        address: acc.address,
        description: acc.description,
        duration: acc.duration,
        price: acc.price,
        notes: acc.notes,
        id: acc._id.toString(),
        image: acc.image,
      })),
    },
  };
};

export default Accomodation;
