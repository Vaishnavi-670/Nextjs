'use client'
import React from 'react'

const page = () => {

  const carditems=10;
  const displayMessage = () => {
    return(
      <div className='border border-res-500 bg-red-100 p-3 rounded-md w-1/2 mx-auto mt-4'>
        <span className='text-red-500 font-bold'>Alert! you need to login first</span>
      </div>
    )
  }
  return (
    <div>
      {displayMessage()}
       <h1 className='text-center text-4xl font-bold text-black'>Home page</h1>

       <h2 className='text-2xl text-center'>Card Items:{carditems + 5} </h2>

       <button className='btn'>My Button</button>
    </div>
  )
}

export default page