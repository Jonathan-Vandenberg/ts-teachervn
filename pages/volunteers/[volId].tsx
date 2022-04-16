import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import * as mongoDB from "mongodb";
import { MongoClient, ObjectId } from "mongodb";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import VolunteerDetail from "../../components/volunteer/volunteer-detail";
import { Values } from "../../components/volunteer/volunteer-form";

interface VolunteerProps extends Values {
  volunteer: Values;
  _id: string
}

const VolunteerDetailsPage: React.FC<VolunteerProps> = (
  props
): ReactJSXElement => {
  return (
    <VolunteerDetail
      title={props.volunteer.title}
      address={props.volunteer.address}
      description={props.volunteer.description}
      duration={props.volunteer.duration}
      notes={props.volunteer.notes}
      id={props.volunteer.id}
      image={props.volunteer.image}
    />
  );
};

export default VolunteerDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(`${process.env.VOLUNTEER_KEY}`);
  const db = client.db();

  const volCollection = db.collection("volunteers");

  const vols = await volCollection.find({}, { _id: 1 } as any).toArray();

  client.close();

  return {
    fallback: false,
    paths: vols.map((volunteer) => ({
      params: {
        volId: volunteer._id.toString(),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const volId = context.params?.volId;

  const ObjectID = mongoDB.ObjectId;
  const id = new ObjectID(volId as unknown as mongoDB.ObjectId);

  const client = await MongoClient.connect(`${process.env.VOLUNTEER_KEY}`);

  const db = client.db();

  const volCollection = db.collection("volunteers");

  const singleVolunteer = await volCollection.findOne({
    _id: new ObjectId(id),
  });

  client.close();

  return {
    props: {
      volunteer: {
        title: singleVolunteer?.title,
        address: singleVolunteer?.address,
        description: singleVolunteer?.description,
        duration: singleVolunteer?.duration,
        notes: singleVolunteer?.notes,
        image: singleVolunteer?.image,
        id: singleVolunteer?._id.toString(),
      },
    },
  };
};
