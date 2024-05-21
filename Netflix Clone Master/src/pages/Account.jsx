import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img className='w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/be5b2939-da9f-4b9f-b76b-31b32ad0515b/IN-en-20230515-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/' />
      <div className='bg-black/60 top-0 left-0 fixed  w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-4xl font-bold'>My Shows</h1>
      </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account