import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import * as mongoDB from "mongodb";
import { MongoClient, ObjectId } from "mongodb";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { Values } from "../../components/school/school-form";
import SchoolDetail from "../../components/school/school-detail";

interface SchoolProps {
  school: Values;
}

const SchoolDetailsPage: React.FC<SchoolProps> = (props): ReactJSXElement => {
  return (
    <SchoolDetail
      title={props.school.title}
      address={props.school.address}
      description={props.school.description}
      duration={props.school.duration}
      notes={props.school.notes}
      id={props.school.id}
      pay={props.school.pay}
      image={props.school.image}
    />
  );
};

export default SchoolDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const client: mongoDB.MongoClient = await MongoClient.connect(
    `${process.env.SCHOOL_KEY}`
  );
  const db: mongoDB.Db = client.db();

  const schoolCollection: mongoDB.Collection = db.collection("schools");

  const schools = await schoolCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: schools.map((school) => ({
      params: {
        schoolId: school._id.toString(),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const schoolId = context.params?.schoolId;

  const ObjectID = mongoDB.ObjectId;
  const id: mongoDB.ObjectId = new ObjectID(schoolId);

  const client: mongoDB.MongoClient = await MongoClient.connect(
    `${process.env.SCHOOL_KEY}`
  );

  const db: mongoDB.Db = client.db();

  const schoolCollection: mongoDB.Collection = db.collection("schools");

  const singleSchool = await schoolCollection.findOne({
    _id: new ObjectId(id),
  });

  client.close();

  return {
    props: {
      school: {
        title: singleSchool?.title,
        address: singleSchool?.address,
        description: singleSchool?.description,
        duration: singleSchool?.duration,
        notes: singleSchool?.notes,
        pay: singleSchool?.pay,
        image: singleSchool?.image,
        id: singleSchool?._id.toString(),
      },
    },
  };
};
