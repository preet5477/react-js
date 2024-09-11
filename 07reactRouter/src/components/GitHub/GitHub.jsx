import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/preet5477')
        .then(response=> response.json())
        .then(data=> {
            console.log(data);
            setData(data);
        })
    },[])


  return (
    <div  className='text-center m-4 bg-gray-500 text-white
    p-4 text-3xl'>
    <img src={data.avatar_url} alt="Git Picture" width={200}/>
      GitHub Followers : {data.followers}
    </div>
  )
}

export default GitHub
