import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

function Body() {
  
  const [memes, setMemes] = useState([]);
  const [showShimmer , setShowShimmer] = useState(true);
  const fetchMemes = async () => {
      setShowShimmer(true);
      const res = await fetch("https://meme-api.com/gimme/20");
      const memeData = await res.json();
      setShowShimmer(false);
      setMemes((memes) => [...memes, ...memeData.memes]);
  }

  const handleScroll = () => {
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        fetchMemes();
    }
  }

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    
    <div className='flex flex-wrap '>
      {showShimmer && <Shimmer/>}
      {memes.map((meme, index) => <MemeCard key={index} memeData={meme} />)}
    </div>
  )
}

export default Body