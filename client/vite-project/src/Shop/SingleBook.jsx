import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id , imageUrl , title} = useLoaderData();
  return (

   
    <div className='mt-28 px-4 lg:px-24'>
      <img src={imageUrl} alt="" className='h-96' />
      <h1>{title}</h1>
    </div>
  )
}

export default SingleBook;
