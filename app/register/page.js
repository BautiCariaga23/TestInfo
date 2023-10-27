"use client"
import React, { useState } from 'react'
import "./styles.css"
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
export default function Register() {
    const {push} = useRouter()
    const [name, setName] = useState("")
    const data = useSearchParams()

    const handleOnChange = ()=>{
        setName(event.target.value)
    }
  return (
    <main className='h-screen grid place-items-center'>
        <div className='grid place-items-center'>
        <h1 className='text-white text-6xl'>Antes de empezar!</h1>
        <div className='mt-10 grid place-items-center'>
            <input onChange={handleOnChange} placeholder='Tu nombre completo' className='block mb-5 p-2 rounded-lg text-black
             focus:outline-none bg-white focus:rounded-xl focus:border-2 border-rose-500 duration-150'></input>
                <button onClick={()=>{
                    if(name != "" && name.length >= 3){
                      push(`/questions?theme=${data.get('theme')}&name=${name}`)
                }else{
                  alert("Inserte un nombre valido")
                }}
              } className={`p-2 rounded-lg w-24 bg-white text-black hover:rounded-xl
                      hover:bg-rose-700 hover:text-white duration-150`}>
                Comenzar</button>
        </div>
        </div>
    </main>
  )
}
