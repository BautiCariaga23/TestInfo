"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import "./styles.css"
export default function Register() {
    const {push} = useRouter()
    const [name, setName] = useState("")
    const [timer, setTimer] = useState(3)
    const [gogame, setgogame] = useState(false)
    const data = useSearchParams()
    
    if(gogame){
      if(timer >0){
        setTimeout(()=>{
          setTimer(timer-1)
        },1000)
      }
     else{
        push(`/questions?theme=${data.get('theme')}&name=${name}`)
      }
    }

    const handleOnChange = ()=>{
        setName(event.target.value)
    }
  return (
    <main className='h-screen grid place-items-center'>
        <div className='grid place-items-center'>
        <div className={`${gogame ? 'show gofade' : 'hide '} opacity-0 z-50 grid place-items-center absolute h-screen w-full bg-black`}>
                <h1 className=
                {`absolute animate-bounce text-lime-500 text-7xl md:text-8xl bg-transparent duration-[1s]`}>
                  {timer}</h1>
            </div>
        <h1 className='text-white text-6xl text-center'>Antes de <br/>empezar!</h1>
        <div className='mt-10 grid place-items-center'>
            <input onChange={handleOnChange} placeholder='Tu nombre completo' className='block mb-5 p-2 rounded-lg text-black
             focus:outline-none focus:rounded-xl bg-white focus:border-2 border-rose-700 duration-150'></input>
                <button onClick={()=>{
                    if(name != "" && name.length >= 3){
                      setgogame(true);
                      
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
