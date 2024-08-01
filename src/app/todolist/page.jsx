'use client'
import React, { useState } from 'react'

const TodoList = () => {
    const [count, setcount] = useState(0);

    const [taskList, settaskList] = useState([
        {text:'ghar ki safai', completed:false, added:new Date()},
        {text:'padhai', completed:false, added:new Date()},
        {text:'sona', completed:false, added:new Date()},
        {text:'khana', completed:false, added:new Date()},
        {text:'ghoomna', completed:false, added:new Date()},
        {text:'sona', completed:false, added:new Date()},
        {text:'khana', completed:false, added:new Date()},
    ]);
    
    const addTask = (e) => {
        if(e.code === 'Enter'){
            console.log(e.target.value);
            e.target.value ='';
        }
    }

  return (
    <div className='max-w-5xl mx-auto mt-6'>
      <div className="border shadow rounded-xl">
       <div className='p-4 border-b-2'>
         <input onKeyDown={addTask} type='text' placeholder='Add a new task...' className='w-full px-3 py-1 border bg-gray  rounded-xl outline-none ' />
       </div>
       <div className='p-6'>
        {/* <h1 className='text-3xl text-red-500 '>{count}</h1>
        <button className='bg-gray-300 p-4' onClick={()=>{setcount(count+1); console.log(count);}}>Add</button> */}
         {
            taskList.map((task , index)=>{
                return (
                 <div key={index} className='rounded-md  border mb-5 bg-gray-100 shadpw p-4'>
                     <p>{task.text}</p>
                     <div className='flex justify-end gap-4 mt-2'>
                        <button className='bg-blue-500 px-3 py-1 rounded-full text-white'>Completed</button>
                        <button className='bg-red-500 px-3 py-1 rounded-full text-white' >Delete</button>
                     </div>
                 </div>
                )
            })
         }
       </div>
      </div>
    </div>
  )
}

export default TodoList