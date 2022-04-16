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
  const { method } = req;

  switch (method) {
    case "DELETE":
      break;

    case "PUT":
      break;

    case "POST":
      const data = req.body;
      const client = await MongoClient.connect(`${process.env.SCHOOL_KEY}`);
      const db = client.db();
      const schoolCollection = db.collection("schools");
      const result = await schoolCollection.insertOne(data);
      client.close();
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
  {
  }
};

export default handler;
