import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { redirect } from "next/navigation";

type Props = {
    params:{},
    searchParams: {[key:string]: string | string[] | undefined},
}

export default async function Upload(props: Props) {
    const mongoClient = new MongoClient('mongodb+srv://buati2323:12872563b@cluster0.joggabu.mongodb.net/Leaderboard?retryWrites=true&w=majority');
    mongoose.connect("0.0.0.0/Leaderboard").
    then(()=>{
        console.log("connected")
    }).catch(()=>{
        console.log("error")
    })
    mongoClient.db().collection('Leaderboard').insertOne({name:props.searchParams.name,points:props.searchParams.points})
    redirect(`/results?name=${props.searchParams.name}&points=${props.searchParams.points}&theme=${props.searchParams.theme}`)
}
