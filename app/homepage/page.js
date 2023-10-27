import Head from 'next/head'
import React from 'react'
import backG from "../../public/bgHome.jpg"
import Link from 'next/link'
import "../globals.css"

export default function HomePage() {
  return (
    <div>
        <main style={{backgroundImage:`url(${backG.src})`,backgroundRepeat:'no-repeat', backgroundSize:'cover'}} 
        className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className='text-9xl tracking-wide mt-8 mb-0 text-center'>PONETE A <br/>PRUEBA</h1>
        <h1 className='text-lg'>Hace tu test informatico sobre:</h1>
        <div className='w-full grid md:grid-cols-3 md:px-16 place-items-center gap-5'>
            <Link href={{
            pathname: '/register',
            query: { theme: 'Software'},
            }}><button className='bg-[#CE1383] shadow-none tracking-wider font-extralight p-3 w-64 text-4xl rounded-lg
            hover:rotate-6 hover:scale-105 hover:shadow-xl hover:shadow-pink-500 duration-150'>Software</button></Link>
            <button className='bg-[#CE1383] shadow-none tracking-wider font-extralight p-3 w-64 text-4xl rounded-lg
            hover:rotate-6 hover:scale-105 hover:shadow-xl hover:shadow-pink-500 duration-150'>General</button>
            <button className='bg-[#CE1383] shadow-none tracking-wider font-extralight p-3 w-64 text-4xl rounded-lg
            hover:rotate-6 hover:scale-105 hover:shadow-xl hover:shadow-pink-500 duration-150'>Hardware</button>
        </div>
        </main>
        </div>
  )
}
