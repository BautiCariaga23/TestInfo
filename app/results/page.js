"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'
import "./styles.css"
import Link from 'next/link'

export default function Results() {

    const data = useSearchParams()
    const list = [
        {
            name:"Unknown",
            p: 0
        },
        {
            name:"Unknown",
            p: 0
        },
        {
            name:"Unknown",
            p: 0
        },
        {
            name:"Unknown",
            p: 0
        },
        {
            name:"Unknown",
            p: 0
        },
    ]
  return (
    <main className='grid h-screen place-items-center text-white text-center'>
        <div>
        <h1 className='text-7xl'>Buen trabajo {data.get('name')}!</h1>
        <h2 className='text-3xl'>Obtuviste <span className='text-lime-300'>{data.get('points')}</span> puntos en {data.get('theme')}</h2>
        <ul className='mt-10 w-full grid place-items-center'>
            {list.map((el,i)=>{
                return <li className='border-gray-600 text-left border w-48 p-2'>{i+1}. {el.name}: {el.p} PTS</li>
            })}
        </ul>
        <Link href = "/homepage"><button className={`p-2 rounded-lg w-36 bg-white text-black hover:rounded-xl
                      hover:bg-rose-700 mt-10 hover:text-white duration-150`}>
                Volver al menu</button></Link>
        </div>
    </main>
  )
}
