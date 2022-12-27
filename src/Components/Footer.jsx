import React from 'react'

function Footer(props) {
   let todos = props.todos;
   /* const result = value.map((sum)=>{
    if(value.isCompleted == false)
    sum++;
   }); */
   let sum = todos.filter((todo)=> !todo.isComplete).length;

   /* for(let i =0 ; i<todos.length; i++)
   {
    if(todos[i].isComplete == false)
    sum++;
   } */
   
  return (
    <>
    <footer id='footer'>
      <div>
        <p className='mt-3'>Remaining To Do : {sum} </p>
      
      </div>
    </footer>
    </>
  )
}

export default Footer