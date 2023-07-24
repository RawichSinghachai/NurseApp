import { NextApiRequest, NextApiResponse } from 'next';
import { findAll,} from '@/server/controllers/Device';

const handler = async(req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'GET'){
        res.json(await findAll())
    }
}

export default handler