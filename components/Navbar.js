"use client";

import React from 'react';
import { useUser, SignOutButton } from "@clerk/nextjs";
import Link from 'next/link';

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className='bg-yellow-950 text-white flex justify-between px-4 items-center h-16'>
      <Link href="/" className="logo font-bold">
        GetMe a Coffee!
      </Link>
      <div className="flex gap-4">
        {isSignedIn ? (
          <>
            <Link href="/profile">
              <button className="bg-amber-600 text-lg text-black font-extrabold font-sans px-5 py-2 border-2 border-black rounded-md shadow-sm cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow active:translate-x-0.5 active:translate-y-0.5 active:shadow-xs transition-transform">
                Profile
              </button>
            </Link>
            <SignOutButton>
              <button className="bg-amber-600 text-lg text-black font-extrabold font-sans px-5 py-2 border-2 border-black rounded-md shadow-sm cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow active:translate-x-0.5 active:translate-y-0.5 active:shadow-xs transition-transform">
                Logout
              </button>
            </SignOutButton>
          </>
        ) : (
          <Link href="/sign-in">
            <button className="bg-amber-600 text-lg text-black font-extrabold font-sans px-5 py-2 border-2 border-black rounded-md shadow-sm cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow active:translate-x-0.5 active:translate-y-0.5 active:shadow-xs transition-transform">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
