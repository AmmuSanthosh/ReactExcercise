//import React, { useState } from 'react'
import './Todolist.css';
import { useState } from 'react'

function Todolist() {
    const [toDos, setToDos] = useState([]);
    const [toDo, setToDo] = useState('');
    return (
        <div className='app'>
            <div className='main_heading'>
                <h1>To Do List</h1>
            </div>
            <div className='sub_heading'>
                <br />
                <h3>Happy Thursday</h3>
            </div>
            <div className='input'>
                <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder='Add item....' />
                <i onClick={() => setToDos([...toDos,{id:Date.now(),text:toDo, status:false}])} className='fas fa-plus'></i>
            </div>
            <div className="todos">
            
                { toDos.map((obj) => {

                return(
                <div className='todo'>                    
                    <div className='left'>
                        <input onChange={(e)=>{
                            console.log(e.target.checked);
                            console.log(obj);
                            setToDos(toDos.filter(obj2 => {
                                if(obj2.id==obj.id){
                                    obj2.status=e.target.checked
                                }
                                return obj2
                            }))
                        }} value={obj.status}  type="checkbox" />
                        <p>{obj.text}</p>
                    </div>
                    <div className='right'>
                        <i className='fas fa-times'></i>
                    </div>
                </div> 
                )
            })  }
            {
                toDos.map((obj) => {
                    if(obj.status){
                        return(
                            <h1>{obj.text}</h1>
                        )
                    }
                }) }
            
            </div>
        </div>
    );
}

export default Todolist