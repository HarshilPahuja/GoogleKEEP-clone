import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";

function CreateArea(props) {

    const [titlecontent, settitlecontent]=useState({
        title:"",
        content:""
    });

    function changetitlecontent(event){
           let inputname=event.target.name;
            let newvalue=event.target.value;
        settitlecontent((prevvalue)=>{
            
            if(inputname==="title"){
                return{
                    title:newvalue,
                    content:prevvalue.content
                }
            }
            else if(inputname==="content"){
                return {
                    title:prevvalue.title,
                    content:newvalue
                }
            }
        })
    }

    

  return (
    <div>
      <form>
        <input onChange={changetitlecontent} name="title" placeholder="Title" value={titlecontent.title} />
        <textarea onChange={changetitlecontent} name="content" placeholder="Take a note..." rows="3" value={titlecontent.content} />
          <Fab onClick={(event)=>{
            event.preventDefault();
            props.additems(titlecontent);
            settitlecontent({ title: "", content: "" }); 
        }} ><AddIcon/></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
