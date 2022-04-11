import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { Values } from "../../components/accomodation/accomodation-form";

type Data = {
  body: Values;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data: Values = req.body;
    const client = await MongoClient.connect(`${process.env.ACCOMODATION_KEY}`);
    const db = client.db();
    const accCollection = db.collection("accomodation");
    const result = await accCollection.insertOne(data);

    client.close();
  }
};

export default handler;
