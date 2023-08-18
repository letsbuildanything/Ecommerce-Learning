'use client'
import {SessionProvider} from 'next-auth/react'
import Login from './login'

export default function provider({children}){
    return(
        <SessionProvider>
            <Login childComponent={children} />
        </SessionProvider>
    )
}