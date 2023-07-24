import { NextApiRequest, NextApiResponse } from 'next';
import { register } from '@/server/controllers/Users';

const handler = async(req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        const {
            parentname,
            relation,
            phone,
            password,
            babyname,
            babyage,
            babysex,
            babybirthday,
          }= req.body;
        res.json(await register(parentname,relation,phone,password,babyname,babyage,babysex,babybirthday));
    }
}

export default handler