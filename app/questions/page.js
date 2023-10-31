"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import softwareq from './softwareQ.json'
import hardwareq from './hardwareQ.json'
import generalq from './generalQ.json'
import "./styles.css"
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function Preguntas() {
    const data = useSearchParams()
    const maxTime = 15;
    const {push} = useRouter()
    let theme = softwareq
    const randomOrder = [
        [1,5,3,2,4,6,0],
        [1,7,2,6,4,10,3,11,0],
        [9,4,2,1,3,5,6,8,0]
    ]
    switch(data.get('theme')){
        case "Software":
            theme = softwareq
            break
        
        case "Hardware":
            theme = hardwareq;
            break
        case "General":
            theme = generalq;
            break
    }
    const randomNumber = data.get('theme') != "General" ? 0 : 1;
    const [currQ, setCurrQ] = useState(0);
    const [hasSelected, setHasSelected] = useState(false);
    const [option, setOption] = useState(0);
    const [points, setPoints] = useState(0);
    const [timer, setTimer] = useState(maxTime);
    const [timerStarted, setTimerStarted] = useState(false);
    if(!timerStarted){
        setTimeout(()=>{
            if(timer>0 && !hasSelected){
                setTimer(timer-1);
                setTimerStarted(false)
            }else if(timer <= 0 && !hasSelected){
                setOption(-1);
                setHasSelected(true)
            }
            
        },1000)
        setTimerStarted(true);
    }
   
    useEffect(()=>{
        if(hasSelected && currQ < randomOrder[randomNumber].length-1){
            if(option == theme.questions[randomOrder[randomNumber][currQ]].c)setPoints(points+timer*10);
            setTimeout(()=>{
                setTimer(maxTime);
                setTimerStarted(false)
                if(currQ < randomOrder[randomNumber].length-2){
                    setCurrQ(currQ+1)
                    setHasSelected(false)
                }else{
                    push(`/results?name=${data.get('name')}&points=${points}&theme=${data.get('theme')}`)
                }
               
            },4000)
            
        }
        console.log(`Length: ${randomOrder[randomNumber].length} CURR: ${currQ}`)
    },[hasSelected])
    
    return (
        <main className='h-screen text-black'>
            <div className={`${hasSelected ? 'show gofade' : 'hide '} opacity-0 z-50 grid place-items-center absolute h-screen w-full bg-black`}>
                <div className={`${hasSelected ? option == theme.questions[randomOrder[randomNumber][currQ]].c ? 'show' : 'hide' : ''} containerConfetti absolute bg-transparent overflow-hidden`}>
                    <div className='confetti'></div>
                    <div className='confetti'></div>
                    <div className='confetti'></div>
                    <div className='confetti'></div>
                    <div className='confetti'></div>
                    <div className='confetti'></div>
                    <div className='confetti'></div>
                    <div className='confetti'></div>
                    <div className='confetti'></div>
                    <div className='confetti'></div>
                    <div className='confetti'></div>
                    <div className='confetti'></div>
                    <div className='confetti'></div>
                </div>
                <h1 className=
                {`${hasSelected ? option == theme.questions[randomOrder[randomNumber][currQ]].c ? 'show mb-24 rotate-3' : 'hide' : ''} 
                absolute text-lime-500 text-7xl md:text-8xl bg-transparent duration-[1s]`}>CORRECTO!</h1>
                <h1 className=
                {`${hasSelected ? option == theme.questions[randomOrder[randomNumber][currQ]].c ? 'hide' : 'show' : ''} 
                absolute text-red-500 text-7xl md:text-8xl bg-transparent`}>INCORRECTO!</h1>
            </div>
            <div className='flex justify-between py-3 px-1'>
            <div className='block'>
            <h1 className='text-gray-400 text-xl'>-{data.get('theme')}</h1>
            <h1 className='text-gray-400 absolute text-lg'>- {currQ+1} / {randomOrder[randomNumber].length-1}</h1>
            </div>
            <h1 className='text-white text-2xl mr-10'>PUNTOS: {points}</h1>
            <h1 className={`text-3xl ${hasSelected>0 ? '' : 'animate-bounce'} 
            border-2 border-gray-300 text-gray-300 rounded-full w-10 text-center`}>{timer}</h1>
            </div>
            <div className='grid place-items-center pt-12'>
                <h1 className='font-bolder h-36 text-white text-2xl md:text-4xl px-1 md:px-0 lg:w-[900px] text-center'>
                    {theme.questions[randomOrder[randomNumber][currQ]].q}
                </h1>
                <hr className='border-[1px] mt-9 border-gray-400 w-full'/>
                <div className='grid mt-2 overflow-hidden w-full place-items-center'>
                    <button onClick={()=>{
                        if(!hasSelected && timer >0){
                            setOption(0)
                            setHasSelected(true);
                        }
                        
                    }} className={`${hasSelected ? 0 == theme.questions[randomOrder[randomNumber][currQ]].c ? 'bg-lime-600': 'bg-red-500' : 'bg-gray-300'} p-2 rounded-lg w-72 mt-5 hover:rounded-xl
                     ${hasSelected ? 'text-white': 'text-black goappear'} hover:${hasSelected ? '' : 'bg-gray-400'}
                     hover:text-white hover:translate-y-[-5px] duration-150`}>
                        {theme.questions[randomOrder[randomNumber][currQ]].st}</button>

                    <button onClick={()=>{
                        if(!hasSelected && timer >0){
                            setOption(1)
                            setHasSelected(true);
                        }
                        
                    }} className={`${hasSelected ? 1 == theme.questions[randomOrder[randomNumber][currQ]].c ? 'bg-lime-600': 'bg-red-500' : 'bg-gray-300'} p-2 rounded-lg w-72 mt-5 hover:rounded-xl
                    ${hasSelected ? 'text-white': 'text-black goappear'} hover:${hasSelected ? '' : 'bg-gray-400'}
                     hover:text-white hover:translate-y-[-5px] duration-150`}>
                        {theme.questions[randomOrder[randomNumber][currQ]].nd}</button>
                        
                    <button onClick={()=>{
                        if(!hasSelected && timer >0){
                            setOption(2)
                            setHasSelected(true);
                        }
                        
                    }} className={`${hasSelected ? 2 == theme.questions[randomOrder[randomNumber][currQ]].c ? 'bg-lime-600': 'bg-red-500' : 'bg-gray-300'} p-2 rounded-lg w-72 mt-5 hover:rounded-xl
                    ${hasSelected ? 'text-white': 'text-black goappear'} hover:${hasSelected ? '' : 'bg-gray-400'}
                    hover:text-white hover:translate-y-[-5px] duration-150`}>
                        {theme.questions[randomOrder[randomNumber][currQ]].rd}</button>

                    <button onClick={()=>{
                        if(!hasSelected && timer >0){
                            setOption(3)
                            setHasSelected(true);
                        }
                       
                    }} className={`${hasSelected ? 3 == theme.questions[randomOrder[randomNumber][currQ]].c ? 'bg-lime-600': 'bg-red-500' : 'bg-gray-300'} p-2 rounded-lg w-72 mt-5 hover:rounded-xl
                     ${hasSelected ? 'text-white': 'text-black goappear'} hover:${hasSelected ? '' : 'bg-gray-400'}
                    hover:text-white hover:translate-y-[-5px] duration-150`}>
                        {theme.questions[randomOrder[randomNumber][currQ]].th}</button>
                </div>
            </div>
            <footer className='absolute flex justify-between w-full bottom-4 p-3 text-white'>
            <Link href={"/"}><div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
            stroke="currentColor" class="w-5 h-5 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>

                <p>Volver al inicio</p>
                </div></Link>
                <div>
                <p className='text-lg text-gray-700 pr-2'>{data.get('name')}</p>
                </div>
            </footer>
        </main>
    )
}
