import { MongoClient } from "mongodb";
import Head from "next/head";
import { NextPage } from "next/types";
import * as React from "react";
import { Values } from "../components/school/school-form";
import TitlebarImageList from "../components/school/school-list";

interface Props extends Values {
  _id: string;
  schools: Values[];
}

const Schools: NextPage<Props> = (props: Props) => {
  return (
    <>
      <Head>
        <title>Schools</title>
        <meta
          name="description"
          content="Find accomodation for the duration of your contract."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitlebarImageList schools={props.schools} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(`${process.env.SCHOOL_KEY}`);

  const db = client.db();

  const schoolCollection = db.collection("schools");

  const schools = await schoolCollection.find().toArray();

  client.close();

  return {
    props: {
      schools: schools.map((school) => ({
        title: school.title,
        address: school.address,
        description: school.description,
        duration: school.duration,
        pay: school.pay,
        notes: school.notes,
        id: school._id.toString(),
        image: school.image,
      })),
    },
  };
};

export default Schools;
