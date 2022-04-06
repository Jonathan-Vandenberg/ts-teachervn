import { MongoClient } from "mongodb";
import { Values } from "../../components/school/school-form";
import type { NextApiRequest, NextApiResponse } from "next";

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
