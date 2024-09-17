import {  NextResponse } from "next/server";
import { connect } from "../../../helpers/db";
import Todo from "@/shema/todoschem";

export const GET = async()=>{
    try {
        connect()
        const todos = await Todo.find()
       return NextResponse.json({
            todos: todos,
        })
    } catch (error) {
        return NextResponse.json({message: "something went wrong server side"})
    }


};
export const POST = async()=>{
    try {
        connect()
        const todos = new Todo({title: "this is another title", isDone: false})
        todos.save()
       return NextResponse.json({
            todos: todos,
        })
    } catch (error) {
        return NextResponse.json({message: "something went wrong server side"})
    }


};