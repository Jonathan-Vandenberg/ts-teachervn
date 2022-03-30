import { MongoClient } from 'mongodb'
import { Values } from '../../components/accomodation/accomodation-form'

interface Handler {
  req: string | undefined,
  res: string | null,
  method: string,
  body: Values,
}


export const handler = async (req: Handler, res: Handler) => {
  if (req.method === 'POST') {
    const data = req.body as Values
    const client = await MongoClient.connect(
      `${process.env.ACCOMODATION_KEY}`,
    )
    const db = client.db()
    const accCollection = db.collection('accomodation')
    const result = await accCollection.insertOne(data)
    
    client.close()
  }
}

export default handler
