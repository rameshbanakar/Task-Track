import { useDispatch, useSelector } from 'react-redux'
import { deletetask,addtask } from '../redux/Action'
import { useState} from "react"
export default function TaskManage() {
  
    const [name,setName]=useState("")
    const [data,setData]=useState("")
    const [days,setDays]=useState("")
    const tasks=useSelector(state=>state.tasks)
    const dispatch=useDispatch()
    const hellow=(a,b,days)=>{
        setData({id:b,name:a,day:days})
    }
    const changed=(e)=>{
        setName(e.target.value)
        
    }
    const changeday=(e)=>{
        setDays(e.target.value)
        
        hellow(name,tasks.length+1,e.target.value)
    }
   
     
  return (
    <div>
        
        <div style={{backgroundColor:"greenyellow",marginTop:"10px", paddingTop:"10px",paddingBottom:"10px",textAlign:"center"}}>
           
              <h5>Manage and Track Your Task</h5>
          
               
            </div>
            
        
        
        {tasks.map(task=>(
            <div className="card text-center" key={task.id}>
            <div className="card-header">
              Task Assigned
            </div>
            {
              
            }
            <div className="card-body" style={{alignItems:"center"}}>
              <h5 className="card-title">{task.name}</h5>
              <div>
              <ul className='tasklist'>
                <li className='taskitem'><input type="checkbox" />Sub task</li>
                <li className='taskitem'><input type="checkbox"  />Sub task</li>
                <li className='taskitem'><input type="checkbox" />Sub task</li>
                <li className='taskitem'><input type="checkbox" />Sub task</li>
                
                
              </ul>
                
            </div>
              
              
            </div>
            <button type="button" class="btn btn-success" style={{margin:"auto"}} onClick={()=>dispatch(deletetask(task.id))}>Submit Task</button>
            <div className="card-footer text-muted">
              {task.day} days left to submit
            </div>
          </div>
        ))}
        <div className='posting'>

            <input type="text" className='form-control' placeholder='Enter New Task Name' onChange={changed} />
            <input type="text" className='form-control' placeholder='Days left to submit' onChange={changeday} />
            {name!==""&&
            <button type="button" 
            className="btn btn-outline-success" 
            style={{marginLeft:"45%",marginTop:"10px"}} onClick={()=>dispatch(addtask(data))}>Add Task</button>}
        </div>

       
        
    </div>
    
  )
}
