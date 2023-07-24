import { ObjectId } from "mongodb";
import { client } from "./ConfigServer";


export const findAll = async () => {
  await client.connect();
  const users = await client.db("nurse").collection("data").find({}).toArray();
  await client.close();
  return users;
};

export const createDocument = async (id:string) => {

  const objectId = new ObjectId(id);

  await client.connect();
  const user = await client
    .db("nurse")
    .collection("data")
    .findOne({ _id: objectId });
  if (user) {
    await client.db("nurse").collection("data").deleteMany({$nor:[{_id:objectId}]})
    await client.close();
  } else {
    await client
      .db("nurse")
      .collection("data")
      .insertMany([{ _id: objectId}]);

    await client.db("nurse").collection("data").deleteMany({$nor:[{_id:objectId}]})
    await client.close();
    return "created document";
  }
};


export const upload = async (id:string, height:string, weight:string, datetocheck:string) => {
  
  const objectId = new ObjectId(id);

  await client.connect();
  const user = await client
    .db("nurse")
    .collection("users")
    .updateOne({_id:objectId},{$push:{height:height,weight:weight,datetocheck:datetocheck}})
  await client.close();
  return user;
};