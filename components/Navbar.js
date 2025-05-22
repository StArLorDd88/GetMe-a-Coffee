import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-yellow-950 text-white flex justify-between px-4 items-center h-16'>
      <div className="logo font-bold">GetMe a Coffee!</div>
      <div>
        <Link href={"/sign-in"}>
        <button className="bg-amber-600 text-lg text-black font-extrabold font-sans px-5 py-2 border-2 border-black rounded-md shadow-sm cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow active:translate-x-0.5 active:translate-y-0.5 active:shadow-xs transition-transform">
          Login
        </button></Link>
      </div>
    </nav>
  )
}

export default Navbar