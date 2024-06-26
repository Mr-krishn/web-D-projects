import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../Requests';

const Main = () => {
    const [movies,setMovies]=useState([]);

    const movie=movies[Math.floor(Math.random()*movies.length)];

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    },[])

    // console.log(movie);
    const truncString=(str,num)=> str?.length > num ? str=str.slice(0,num)+"..." : str


  return (
    <div className='w-full h-[550] text-white'>
      <div className='w-full h-full'>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

        <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
          <button className='border rounded-sm bg-gray-300 border-gray-300 text-black py-2 px-5'>Play</button>
          <button className='border rounded-sm border-gray-300 text-white py-2 px-5 ml-4'>Watch Later</button>
          </div>
          <p className='text-gray-300 text-sm'>Released: {movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncString(movie?.overview,150)}</p>
        </div>
      </div>
    </div>
  )
}

export default Main