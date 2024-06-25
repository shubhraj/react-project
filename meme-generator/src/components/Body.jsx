import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

function Body() {
  
  const [memes, setMemes] = useState(null);
  const fetchMemes = async () => {
      const res = await fetch("https://meme-api.com/gimme/20");
      const memeData = await res.json();
      console.log(memeData.memes);
      setMemes(memeData.memes);
  }

  useEffect(() => {
    fetchMemes();
  },[]);

  return (
    <div className='flex flex-wrap '>
      {!memes ? <Shimmer/> : memes.map(meme => <MemeCard memeData={meme} />)}
    </div>
  )
}

export default Body