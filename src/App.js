import "./App.css";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId,seteditId] = useState(0)

  const handleSubmit= (e)=>{
    e.preventDefault();

    if (editId){
      const editTodo = todos.find((i)=>i.id==editId);
      const updatedTodos = todos.map((t)=>
      t.id ===editTodo.id
      ? (t={id:t.id,todo}):
      {id:t.id,todo:t.todo}
      )
      setTodos(updatedTodos)
      seteditId(0)
      setTodo('')
      return
    }


    if(todo!==""){
      setTodos([{id:`${todo}-${Date.now()}`, todo},...todos])
      setTodo("")
    }
  };
  const handleDelete=(id)=>{
    const telTodo = todos.filter((to)=> to.id!==id);
    setTodos([...telTodo])
  }
  const handleEdit=(id)=>{
    const editTodo = todos.find((i)=>i.id==id);
    setTodo(editTodo.todo)
    seteditId(id);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>To do list</h1>
        <form className="to-do-form" onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo} />
          <button type="submit">{editId? "Edit": "Go"}</button>
        </form>
        <ul className="alltodo">
          {todos.map((t)=>(
            <li className="singletodo">
            <span className="todotext" key={t.id}>{t.todo}</span>
            <button onClick={()=>handleEdit(t.id)}>Edit</button>
            <button onClick={()=>handleDelete(t.id)} >Delete</button>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
