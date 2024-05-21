import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const Row = ({title,fetchURL,rowId}) => {

    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])

    // console.log(movies)

    const slideLeft=()=>{
        var slider=document.getElementById('slider'+rowId);
        slider.scrollLeft=slider.scrollLeft-500;
      }
      
      const slideRight=()=>{
        var slider=document.getElementById('slider'+rowId);
        slider.scrollLeft=slider.scrollLeft+500;
      }


  return (
    <>
        <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>
        <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute hidden group-hover:block' size={40} />
            <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide '>
                {movies.map((item,id)=>(
                    <Movie item={item} />
                   
                ))}
            </div>
        <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute hidden group-hover:block' size={40} />
        </div>
    </>
  )
}

export default Row