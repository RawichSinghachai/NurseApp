import { NextApiRequest, NextApiResponse } from 'next';
import { createDocument } from '@/server/controllers/Device';

const handler = async(req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        const { id } = req.body;
        res.json(await createDocument(id))
    }
}

export default handler