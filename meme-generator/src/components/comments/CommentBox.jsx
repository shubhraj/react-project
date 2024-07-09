import React from 'react'

const CommentBox = ({data}) => {
  const {username, comment, replies} = data;
  return (
    <div className='p-10 border-l-2 border-black' >
      <div className='flex'>
        <div className=''>
          <img 
            src='https://styles.redditmedia.com/t5_78pd4j/styles/profileIcon_snooa20b3701-515e-4ab6-a606-fff36573a50d-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=b5025e4f97c48787cdb331c164aabb04b57c1700' 
            alt='user pic'
            className='w-16 p-2 rounded-full'
            />
        </div>
        <div>
          <p className='font-bold p-2'>{username}</p>
          <p className='px-2'>{comment}</p>
        </div>
      </div>
      <div className='px-1'>
       {replies && replies.map((item, index) => <CommentBox key={index} data={item}/>)}
      </div>
    </div>
  )
}

export default CommentBox