import React, { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/stores/store';
import axios from 'axios';
import { save } from '../stores/UserDataStore';
import { useRouter } from 'next/router'
type Props = {}

const Checkdata = (props: Props) => {
    const router = useRouter()
    const dispatch = useDispatch()
    

useEffect(() => {

    //send datauser from database to reducx
    axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users/auth`, {
        token: sessionStorage.getItem('token')
    },
        { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } }
    ).then(userdata => {
        dispatch(save(userdata.data))
        // console.log(datauser.data);
    }).catch((err) => {

    })


    //block path when forget login

    //for test (add some path)
    if(!sessionStorage.getItem('token')){
        if(router.pathname === '/home' || router.pathname === '/display'|| router.pathname === '/chart' || router.pathname === '/advice' || router.pathname === '/profile'){
            router.push('/login')
        } 
    }

    if(sessionStorage.getItem('token')){
        if(router.pathname === '/login'){
            router.push('/home')
        } 
    }

},[])

    return (
        <>
        </>
    )
}

export default Checkdata