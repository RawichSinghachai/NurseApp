import React, { useState, useEffect } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import AddchartIcon from '@mui/icons-material/Addchart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router'

type Props = {}

export default function BottomNavigationBar({ }: Props) {

    const [value, setValue] = useState(0);
    const router = useRouter()

    useEffect(() => {
        switch (router.pathname) {
            case '/home':
                setValue(0)
                break
            case '/display':
                setValue(1)
                break
            case '/advice':
                setValue(2)
                break
            case '/profile':
                setValue(3)
                break
        }
    }, [router])

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
            >
                <BottomNavigationAction label="เครื่องชั้ง" icon={<HomeIcon />} onClick={() => { router.push('/home') }} />
                <BottomNavigationAction label="แปลผล" icon={<AddchartIcon />} onClick={() => { router.push('/display') }} />
                <BottomNavigationAction label="คำแนะนำ" icon={<FavoriteIcon />} onClick={() => { router.push('/advice') }} />
                <BottomNavigationAction label="โปรไฟล์" icon={<AccountCircleIcon />} onClick={() => { router.push('/profile') }} />
            </BottomNavigation>
        </Paper>
    )
}