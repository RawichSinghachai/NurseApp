import { NextApiRequest, NextApiResponse } from "next";
import { upload } from "@/server/controllers/Device";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { id, height, weight, datetocheck } = req.body;
    res.json(upload(id, height, weight, datetocheck));
  }
};

export default handler;
