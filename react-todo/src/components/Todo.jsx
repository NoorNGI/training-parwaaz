import React from 'react'
import Checkmark from './Checkmark'
import { MdDeleteSweep } from 'react-icons/md'

function Todo({name}) {
  return (
    <div className='todo-item py-4 px-2 flex items-center justify-between'>
        <div className='flex gap-8 items-center'>
            <Checkmark />
            <p>{name}</p>
        </div>
        <MdDeleteSweep className='text-[#d62828] text-[20px] cursor-pointer' />
    </div>
  )
}

export default Todo