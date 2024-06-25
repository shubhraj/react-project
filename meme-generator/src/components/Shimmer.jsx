
const Shimmer = () => {
    
    return Array(20).fill(0).map((n,i) => {
        return (
            <div key={i} className='m-2 p-2 border border-black'>
                <div className='w-60 h-60 bg-gray-200'></div>
            </div>
        )
    }) 
}

export default Shimmer;