import React, { useState } from 'react'
import AccordionItem from './AccordionItem';

const data = [
    {
        title: "Accordion #item 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Accordion #item 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Accordion #item 3",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    }
]

function Accordion() {
  const [openItemIndex, setOpenItemIndex] = useState(1);

  return (
    <div className='w-[50%] m-auto mt-10'>
        {data.map((item, index) =>  (
        <AccordionItem 
            key={index} 
            title={item.title} 
            body={item.body} 
            isOpen={index === openItemIndex}
            setIsOpen={()=> {
                index === openItemIndex ? setOpenItemIndex(null) : setOpenItemIndex(index);
            }}
        />))}
    </div>
  )
}

export default Accordion;