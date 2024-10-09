import React from 'react'
import Todo from './Todo'

function TodoList({todos}) {

  return (
    <div>
        {
            todos?.map(todo => <Todo name={todo.name} />)
        }
    </div>
  )
}

export default TodoList