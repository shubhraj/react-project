import React, { useState } from 'react'

function AccordionItem({title, body, isOpen, setIsOpen}) {
    return (
    <div className=' border-b-2 border-black '>
        <div className='font-bold p-2 bg-slate-100 flex justify-between cursor-pointer' 
            onClick={() => {
                setIsOpen(!isOpen)
            }}>
            <span>{title}</span>
            <span>{isOpen ? "🔼" : "🔽"  }</span>    
        </div>
      {isOpen && <div className='p-2'>{body}</div>}
    </div>
  )
}

export default AccordionItem