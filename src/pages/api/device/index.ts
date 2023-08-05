import { NextApiRequest, NextApiResponse } from 'next';
import { findUser,} from '@/server/controllers/Device';

const handler = async(req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'GET'){
        res.json(await findUser())
    }
}

export default handler