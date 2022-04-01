import AccomodationDetail from "../components/accomodation/accomodation.detail";
import { MongoClient, ObjectId } from "mongodb";
import { Values } from "../components/accomodation/accomodation-form";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import * as mongoDB from "mongodb";
import React from "react";
import { ObjectIdLike } from "bson";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface AccProps {
  accData: Values;
}

const AccomodationDetailsPage: NextPage<AccProps> = (
  props
): ReactJSXElement => {
  return (
    <AccomodationDetail
      title={props.accData.title}
      address={props.accData.address}
      description={props.accData.description}
      duration={props.accData.duration}
      notes={props.accData.notes}
      id={props.accData.id}
      price={props.accData.price}
      image={props.accData.image}
    />
  );
};

export default AccomodationDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const client: mongoDB.MongoClient = await MongoClient.connect(
    `${process.env.ACCOMODATION_KEY}`
  );
  const db: mongoDB.Db = client.db();

  const accsCollection: mongoDB.Collection = db.collection("accomodation");

  const accs = await accsCollection
    .find<ObjectIdLike>({}, { _id: 1 })
    .toArray();

  client.close();

  return {
    fallback: false,
    paths: accs.map((acc) => ({
      params: {
        accId: acc._id.toString(),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const accId = context?.params?.accId;

  const client: mongoDB.MongoClient = await MongoClient.connect(
    `${process.env.ACCOMODATION_KEY}`
  );

  const db: mongoDB.Db = client.db();

  const accCollection: mongoDB.Collection = db.collection("accomodation");

  const singleAcc = await accCollection.findOne({ _id: new ObjectId(accId) });

  client.close();

  return {
    props: {
      accData: {
        title: singleAcc?.title,
        address: singleAcc?.address,
        description: singleAcc?.description,
        duration: singleAcc?.duration,
        notes: singleAcc?.notes,
        price: singleAcc?.price,
        image: singleAcc?.image,
        id: singleAcc?._id.toString(),
      },
    },
  };
};
