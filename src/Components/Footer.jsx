import React from 'react'
const Footer = (props) => {
    let todos = props.todos;
    let sum = todos.filter((todo)=> !todo.isComplete).length;
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