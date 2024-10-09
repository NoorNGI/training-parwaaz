import React from 'react'
import Search from './components/Search'
import TodoList from './components/TodoList'

function App() {

  const todos = [
    {
      id: 1,
      task: 'Go to market',
      isCompleted: false
    },
    {
      id: 1,
      task: 'Go to market',
      isCompleted: true
    },
    {
      id: 1,
      task: 'Go to market',
      isCompleted: false
    }
  ]

  return (
    <main className='flex flex-col min-h-[500px] max-h-[500px] bg-white w-[500px] rounded-3xl shadow-lg overflow-hidden'>
      <Search />

      <div className='p-10 pt-5 flex-grow overflow-auto'>
        <TodoList />
      </div>
    </main>
  )
}

export default App
