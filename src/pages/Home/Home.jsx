import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    
    const friendsData = useLoaderData();
    console.log(friendsData);
    
    
    return (
        <div>
            {/* title part */}
            <section className="bg-[#f7fdfb] py-20 px-6 font-sans">
      <div className="container mx-auto flex flex-col items-center text-center">
        
        {/* header and description */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl font-extrabold text-[#1f2937] mb-6 leading-tight tracking-tight">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* Add a Friend btn */}
        <div className="mb-20">
          <button className="btn bg-[#2D5243] hover:bg-[#1e3a2f] text-white border-none rounded-md px-8 flex items-center gap-2 normal-case font-medium text-lg h-14">
            <AiOutlineUserAdd className="text-2xl" />
            Add a Friend
          </button>
        </div>

        {/* cards */}
        <div className="lg:w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* card 1 */}
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <div className="text-7xl font-bold text-[#1f2937] mb-4">
              10
            </div>
            <div className="text-sm font-medium text-gray-500 tracking-wider">
              TOTAL FRIENDS
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <div className="text-7xl font-bold text-[#1f2937] mb-4">
              3
            </div>
            <div className="text-sm font-medium text-gray-500 tracking-wider">
              ON TRACK
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <div className="text-7xl font-bold text-[#1f2937] mb-4">
              6
            </div>
            <div className="text-sm font-medium text-gray-500 tracking-wider">
              NEED ATTENTION
            </div>
          </div>

          {/* card 4 */}
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <div className="text-7xl font-bold text-[#1f2937] mb-4">
              12
            </div>
            <div className="text-sm font-medium text-gray-500 tracking-wider">
              INTERACTIONS THIS MONTH
            </div>
          </div>
        </div>
        <div className='divider w-[90%] mx-auto mt-12'></div>
        
        
      </div>
    </section>
        </div>
    );
};

export default Home;