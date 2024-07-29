import React from 'react';

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='text-center flex flex-col justify-center items-center space-y-6 p-6 rounded-lg mb-6'>
        <h1 className='text-9xl font-bold text-red-500'>404</h1>
        <h1 className='text-3xl font-bold text-gray-700'>Page Not Found</h1>
        <a className='text-2xl bg-gray-400 text-black rounded-lg px-4 py-2  hover:bg-gray-600 transition duration-300' href="/">Go back to the home page</a>
      </div>
      <div className='flex gap-80  justify-center items-center mt-6'>
        <img className='  rounded-lg shadow-lg' style={{ height: '40%', width: '100%' }} src="https://img.freepik.com/free-photo/robot-with-interrogation-symbol_1048-3548.jpg" alt="Robot with interrogation symbol" />
      </div>
    </div>
  );
};

export default NotFound;