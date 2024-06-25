import React from 'react'

function MemeCard({memeData}) {
    const {author, title, url} = memeData;
    return (
    <div className='m-2 p-2 border border-black'>
        <img src={url} alt='meme' className='w-60 h-60'/>
        <p>{author}</p>
    </div>
  )
}

export default MemeCard