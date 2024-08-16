import React from 'react'

const Signup = () => {



  return (
    <div className="flex items-center justify-center h-screen   ">
    <div className="bg-purple-100 fixed w-96 border-[4px] border-purple-400 rounded-2xl hover:border-purple-900 transition-all duration-200">
      <div className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold flex-col">
        <img className='h-24 w-24 rounded-full object-cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_SCRPStWnOp0wyEUVyPtp3_8KrfzcXw7Lg&s'></img>
       
        <h1 className="text-2xl">SignUp </h1>
        <input
          className="w-full p-2 bg-purple-400 rounded-md border border-purple-400 focus:border-purple-700 hover:border-purple-500 transition-all duration-200"
          placeholder="Username"
          type="text"
          // name="username"
          />
        <input
          className="w-full p-2 bg-purple-400 rounded-md border border-purple-400 focus:border-purple-700 hover:border-purple-500 transition-all duration-200"
          placeholder="Email"
          type="email"
          // name="email"
          id=""
        />
        <input
          className="w-full p-2 bg-purple-400  rounded-md border border-purple-400 focus:border-purple-700 hover:border-purple-500 transition-all duration-200"
          placeholder="Password"
          type="password"
          // name="password"
          id=""
        />
        <input
          className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-600 hover:border-purple-500 transition-all duration-200"
          type="submit"
          id=""
        />
        <p>
          Already have an account?
          <a
            className="font-semibold text-gray-500 hover:text-purple-800 transition-all duration-200"
            href="/login"
          >
           Login
          </a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Signup;
