import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { Values } from "../../components/volunteer/volunteer-form";

type Data = {
  body: Values;
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(`${process.env.VOLUNTEER_KEY}`);
    const db = client.db();
    const volCollection = db.collection("volunteers");
    const result = await volCollection.insertOne(data);

    client.close();
  }
};

export default handler;
