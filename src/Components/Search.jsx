import React from 'react';

function Search(props) {

    let todos = props;
    console.log(todos);
    let input = '';

    
    return (
        <>
    <div className='mb-3'>
        <input className='search-input' type="text" placeholder='Search To Do' value={input}/>
    </div>
    {todos.map(value)=>{
        if (value===todos)
    }}
    
    </>
    );
};

export default Search