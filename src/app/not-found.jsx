import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
       <div className='text-center space-y-6'>
       <h1 className='text-9xl font-bold'>404</h1>
       <h1 className='text-2xl font-bold'>Page Not Found</h1>
        <img className='items-center'style={{width:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyXdaORofOx3T-QB5nC4xC4HjF-HB29dgxg&s" alt="" />
        <p className='text-1xl '>Sorry, the page you're looking for doesn't exist.</p>
        <a href="/">Go back to the home page</a>
       </div>
  
    </div>
  )
}

export default NotFound;