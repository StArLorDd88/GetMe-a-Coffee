"use client";

import React from 'react';

const Profile = ({ params }) => {
  const { username } = React.use(params);

  return (
    <>
      <div className='cover w-full relative aspect-[3/1]'>
        <img
          className='object-cover w-full h-full'
          src='https://giffiles.alphacoders.com/275/2754.gif'
          alt='Cover Image'
        />
        <div className='absolute bottom-[-75px] left-1/2 transform -translate-x-1/2 border-white border-4 rounded-full'>
          <img
            className='rounded-full object-cover'
            width={150}
            height={150}
            src='https://i.pinimg.com/originals/cc/8c/da/cc8cda4b7721f0df30f84a9177fef737.gif'
            alt='Profile Picture'
          />
        </div>
      </div>

      <div className='info flex flex-col items-center mt-28'>
        <div className='text-xl font-semibold text-white'>{username}</div>
        <div className='text-white'>Developing Websites</div>
      </div>
      <div>
        <div className="payment flex flex-col md:flex-row gap-6 w-[90%] mx-auto mt-10 bg-[#5C4033] p-4 rounded-xl">
          <div className="supporters md:w-1/2 w-full bg-neutral-700 rounded-lg text-white p-4">
            <h2 className="text-xl font-bold mb-3">Supporters</h2>
            <ul className="space-y-1 max-h-64 overflow-y-auto pr-2">
              <li>Vaibhav donated 100</li>
              <li>Rishab donated 100</li>

            </ul>
          </div>
          <div className="make-payment md:w-1/2 w-full bg-neutral-700 rounded-lg text-white p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-4">Make a Payment</h2>
              <p className="mb-6">Support this initiative by donating an amount of your choice.</p>
            </div>
            <input type='text' className='w-full p-3 rounded-lg bg-yellow-600' placeholder='Enter Name'/>
            <input type='text' className='w-full p-3 rounded-lg bg-yellow-600 mt-2' placeholder='Enter Message'/>
            <input type='text' className='w-full p-3 rounded-lg bg-yellow-600 mt-2' placeholder='Enter Amount'/>
            <button className="bg-blue-800 hover:bg-blue-500 text-white font-semibold py-2 px-6 mt-4 rounded-lg transition duration-300 self-start">
              Pay Now
            </button>
            <div className='flex gap-2 mt-4'>
              <button className='bg-slate-800 hover:bg-yellow-700 p-3 rounded-lg'> Pay ₹10 </button>
              <button className='bg-slate-800 hover:bg-yellow-700 p-3 rounded-lg'> Pay ₹20 </button>
              <button className='bg-slate-800 hover:bg-yellow-700 p-3 rounded-lg'> Pay ₹50 </button>
            </div>
          </div>
        </div>

      </div>
      <div className='p-4'></div>
    </>
  );
};

export default Profile;
