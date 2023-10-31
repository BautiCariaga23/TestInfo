import "./styles.css"
import Link from 'next/link';
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';


type Props = {
    params:{},
    searchParams: {[key:string]: string | string[] | undefined},
}

export default async function Results(props: Props) {
    const mongoClient = new MongoClient('mongodb+srv://buati2323:12872563b@cluster0.joggabu.mongodb.net/Leaderboard?retryWrites=true&w=majority');
    let datab = []
    switch(props.searchParams.theme){
            case 'General':
                datab = await mongoClient.db().collection('Leaderboard').find({}).toArray()
                break

            case 'Software':
                datab = await mongoClient.db().collection('LeaderboardS').find({}).toArray()
                break
            
            case 'Hardware':
                datab = await mongoClient.db().collection('LeaderboardH').find({}).toArray()
                break
    }
    mongoose.connect("0.0.0.0/Leaderboard").
    then(()=>{
        console.log("connected")
    }).catch(()=>{
        console.log("error")
    })
    const sorted = datab.sort((a, b) => b.points - a.points);
  return (
    <main className='grid h-screen place-items-center text-white text-center'>
        <div>
        <h1 className='text-7xl'>Buen trabajo {props.searchParams.name}!</h1>
        <h2 className='text-3xl'>Obtuviste <span className='text-lime-300'>{props.searchParams.points}</span> puntos en {props.searchParams.theme}</h2>
        <ul className='mt-10 w-full grid place-items-center'>
            {sorted.map((el,i)=>{
                if(i < 5){
                    return <li className='border-gray-600 text-left border w-48 p-2'>{i+1}. {el.name}: {el.points} PTS</li>
                }
            })}
        </ul>
        <Link href = "/homepage"><button className={`p-2 rounded-lg w-36 bg-white text-black hover:rounded-xl
                      hover:bg-rose-700 mt-10 hover:text-white duration-150`}>
                Volver al menu</button></Link>
        </div>
    </main>
  )
}
