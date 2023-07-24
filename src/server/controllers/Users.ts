import { ObjectId } from "mongodb";
import { client, jwt, secret } from "./ConfigServer";

export const findAll = async () => {
  await client.connect();
  const users = await client.db("nurse").collection("users").find({}).toArray();
  await client.close();
  return users;
};

export const findOne = async (id: any) => {
  const objectId = new ObjectId(id);
  await client.connect();
  const users = await client
    .db("nurse")
    .collection("users")
    .findOne({ _id: objectId });
  await client.close();
  return users;
};

export const register = async (
  parentname:string,
  relation: string,
  phone: string,
  password: string,
  babyname: string,
  babyage: string,
  babysex: string,
  babybirthday: string
) => {
  await client.connect();
  await client
    .db("nurse")
    .collection("users")
    .insertMany([
      {
        parentname,
        relation,
        phone,
        password,
        babyname,
        babyage,
        babybirthday,
        babysex,
        height: [],
        weight: [],
        datetocheck: [],
        registerdate: new Date(),
      },
    ]);
  await client.close();
  return { status: "resgister success" };
};

export const login = async (phone: string, password: string) => {
  try {
    await client.connect();
    const user = await client
      .db("nurse")
      .collection("users")
      .findOne({ $and: [{ phone: phone, password: password }] });
    await client.close();
    const token = jwt.sign(
      {
        id: user._id,
        parentname: user.parentname,
        relation: user.relation,
        phone: user.phone,
        babyname: user.babyname,
        babyage: user.babyage,
        babybirthday: user.babybirthday,
        babysex: user.babysex,
        registerdate: user.registerdate,
        height: user.height,
        weight: user.weight,
        datetocheck: user.datetocheck,
      },
      secret
    );
    return { status: "login success", token };
  } catch (error) {
    return { status: "login faild" };
  }
};

export const auth = async (token: any) => {
  try {
    const decoded = jwt.verify(token.split(" ")[1], secret);
    return { status: "success", decoded };
  } catch (error) {
    return { status: "error" };
  }
};
