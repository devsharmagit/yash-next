"use client"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home (){

  const [todos, setTodos] = useState([])

  useEffect(()=>{
const fetchTodos = async()=>{
const result = await axios.get("/api/getDetails");
setTodos(result.data.todos)
}
fetchTodos()
  },[])

return <div>
  <h1>this is hello app</h1>
  {todos.map((item : any)=>{
    return <p key={item.title}>
{item.title}
    </p>
  })}
</div>
}