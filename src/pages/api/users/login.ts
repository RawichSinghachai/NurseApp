import { NextApiRequest, NextApiResponse } from 'next';
import { login } from '@/server/controllers/Users';

const handler = async(req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        const { phone, password } = req.body;
        res.json(await login(phone, password));
    }
}

export default handler