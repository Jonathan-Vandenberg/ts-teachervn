import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import * as mongoDB from "mongodb";
import { MongoClient, ObjectId } from "mongodb";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import AccomodationDetail from "../../components/accomodation/accomodation-detail";
import { Values } from "../../components/accomodation/accomodation-form";

interface AccProps {
  accData: Values;
  _id: number;
}

type AccId = {
  accId: mongoDB.ObjectId;
}

const AccomodationDetailsPage: React.FC<AccProps> = (
  props
): ReactJSXElement => {
  return (
    <AccomodationDetail
      title={props.accData.title}
      address={props.accData.address}
      description={props.accData.description}
      duration={props.accData.duration}
      notes={props.accData.notes}
      price={props.accData.price}
      image={props.accData.image} 
      id={""}    
    />
  );
};

export default AccomodationDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(`${process.env.ACCOMODATION_KEY}`);
  const db = client.db();

  const accsCollection = db.collection("accomodation");

  const accs = await accsCollection.find({}, { _id: 1 } as any).toArray();

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
  const accId = context.params?.accId;

  const ObjectID = mongoDB.ObjectId;
  const id = new ObjectID(accId as unknown as mongoDB.ObjectId);

  const client = await MongoClient.connect(`${process.env.ACCOMODATION_KEY}`);

  const db = client.db();

  const accCollection = db.collection("accomodation");

  const singleAcc = await accCollection.findOne({ _id: new ObjectId(id) });

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
