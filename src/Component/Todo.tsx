import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import {addTodos,selectTodo} from "../features/todoSlice"
import { useSelector } from 'react-redux';

function Todo() {
    const dispatch = useDispatch()
    const inputRef = useRef<any>(null);
    const todos = useSelector(selectTodo);

const handelSubmit = (e:any) => {
    e.preventDefault();
    const newTodo = inputRef.current.value;
    dispatch(addTodos(newTodo));
    inputRef.current.value = "";
}

console.log("todos =>",todos)

  return (
    <div>
      <h1 style={{textAlign:"center",fontSize:"30px",fontWeight:600}}>Todo App</h1>
      <div style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
      <form>
          <input  ref={inputRef} style={{border:"0.5px solid orange",width:"350px",padding:"5px",outline:"none",
        color:"gray"}} placeholder='Add todos..' />
        <input onClick={handelSubmit} style={{marginLeft:"20px",color:"white",borderRadius:"5px",width:"80px",background:"orange",padding:"5px"}}  type="submit" />
      </form>
      </div>

      {todos.map((todo:any) => {
          return(
             <div >
                 <p style={{textAlign:"center"}}>{todo}</p>
                 </div>
          )
      })}
      
    </div>
  )
}

export default Todo
