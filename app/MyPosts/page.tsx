import React from "react";
import Posts from "../components/pages/MyPosts/Posts/Posts";
const MyPosts = () => {
  return (
    <div className="w-full h-screen bg-woodsmoke-950 flex flex-col items-center py-5">
      <h1 className=" p-4 font-bold text-3xl text-green-haze-500">My posts</h1>
      {/* Posts */}
      <div className="h-full w-full overflow-y-auto flex flex-col items-center gap-5">
        <Posts />
      </div>
    </div>
  );
};

export default MyPosts;
