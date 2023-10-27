import Head from 'next/head'
import React from 'react'
import backG from "../../public/bgHome.jpg"
import Link from 'next/link'
import "../globals.css"

export default function HomePage() {
  return (
    <div>
        <main
        className="min-h-screen grid text-white place-items-center">
        <div>
        <h1 className='text-9xl tracking-wide mb-0 text-center'>PONETE A <br/>PRUEBA</h1>
        <h1 className='text-lg text-center'>Hace tu test informatico sobre:</h1>
        <div className='w-full grid md:px-16 place-items-center gap-5'>
            <Link href={{
            pathname: '/register',
            query: { theme: 'Software'},
            }}><button className='bg-white text-black mt-5 shadow-none tracking-wider p-3 w-64 text-4xl rounded-lg
            hover:scale-105 hover:bg-rose-700 hover:text-white duration-150'>Software</button></Link>
            <button className='bg-white shadow-none tracking-wider p-3 w-64 text-4xl rounded-lg
            hover:scale-105 text-black hover:text-white hover:bg-rose-700 duration-150'>General</button>
            <button className='bg-white shadow-none tracking-wider p-3 w-64 text-4xl rounded-lg
            hover:scale-105 text-black hover:text-white hover:bg-rose-700 duration-150'>Hardware</button>
        </div>
        </div>
        </main>
        </div>
  )
}
