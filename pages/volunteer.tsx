import { MongoClient } from "mongodb";
import Head from "next/head";
import { NextPage } from "next/types";
import * as React from "react";
import { Values } from "../components/volunteer/volunteer-form";
import VolunteerHero from "../components/volunteer/volunteer-hero";
import TitlebarImageList from "../components/volunteer/volunteer-list";

interface Props extends Values {
  volunteers: Values[];
  _id: string;
}

const Volunteers: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Volunteers</title>
        <meta
          name="description"
          content="Find volunteering work to help the communtity and expand your experience."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VolunteerHero />
      <TitlebarImageList volunteers={props.volunteers} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(`${process.env.VOLUNTEER_KEY}`);

  const db = client.db();

  const volCollection = db.collection("volunteers");

  const vols = await volCollection.find().toArray();

  client.close();

  return {
    props: {
      volunteers: vols.map((vol) => ({
        title: vol.title,
        address: vol.address,
        description: vol.description,
        duration: vol.duration,
        notes: vol.notes,
        id: vol._id.toString(),
        image: vol.image,
      })),
    },
  };
};

export default Volunteers;
