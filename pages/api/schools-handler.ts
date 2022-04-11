import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { Values } from "../../components/school/school-form";

type Data = {
  body: Values;
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(`${process.env.SCHOOL_KEY}`);
    const db = client.db();
    const schoolCollection = db.collection("schools");
    const result = await schoolCollection.insertOne(data);

    client.close();
  }
};

export default handler;
