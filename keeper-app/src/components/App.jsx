
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { useState } from "react";


export default function App(){
const [tasks, settasks]= useState([]); //array of objects{title:, content:}

function addtasks(newvalue){
  settasks((prevvalue)=>{
    return [...prevvalue, newvalue]

  })
}

function deletetasks(id){
  settasks((prevvalue)=>{
    return prevvalue.filter((value,index)=>{
      return index!==id;
    });
  })
}

return <div>
  <Header></Header>
  <CreateArea additems={addtasks}/>

  {tasks.map((task,index) => (
    <Note deleteitems={deletetasks}  key={index} id={index} title={task.title} content={task.content} />
  ))}

  <Footer></Footer>
</div>
}


