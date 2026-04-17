import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import FriendCard from "../../components/FriendCard/FriendCard";

const Home = () => {
  const friendsData = useLoaderData();
  console.log(friendsData);

  return (
    <div>
      {/* title part */}
      <section className="bg-[#f7fdfb] py-10 px-6 font-sans">
        <div className="container mx-auto flex flex-col items-center text-center">
          {/* header and description */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-5xl font-extrabold text-[#1f2937] mb-6 leading-tight tracking-tight">
              Friends to keep close in your life
            </h1>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
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
          <div className="w-full lg:w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* card 1 */}
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <div className="text-7xl font-bold text-[#1f2937] mb-4">10</div>
              <div className="text-sm font-medium text-gray-500 tracking-wider">
                TOTAL FRIENDS
              </div>
            </div>

            {/* card 2 */}
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <div className="text-7xl font-bold text-[#1f2937] mb-4">3</div>
              <div className="text-sm font-medium text-gray-500 tracking-wider">
                ON TRACK
              </div>
            </div>

            {/* card 3 */}
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <div className="text-7xl font-bold text-[#1f2937] mb-4">6</div>
              <div className="text-sm font-medium text-gray-500 tracking-wider">
                NEED ATTENTION
              </div>
            </div>

            {/* card 4 */}
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <div className="text-7xl font-bold text-[#1f2937] mb-4">12</div>
              <div className="text-sm font-medium text-gray-500 tracking-wider">
                INTERACTIONS THIS MONTH
              </div>
            </div>
          </div>
          <div className="divider w-[90%] mx-auto mt-12"></div>

          {/* all friends part */}
          <section className="w-full bg-[#f7fdfb] py-16 md:py-24 px-0 md:px-10 font-sans">
            <div className="max-w-7xl w-full mx-auto flex flex-col items-start">
              {/* heading */}
              <h2 className="text-3xl font-bold text-[#1f2937] mb-12 tracking-tight">
                Your Friends
              </h2>

              {/* home cards*/}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {friendsData.map((friend) => (
                  <FriendCard key={friend.id} friend={friend} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
