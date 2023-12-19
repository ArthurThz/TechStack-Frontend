import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col p-3 bg-woodsmoke-950">
      <h1>This is the home page</h1>
      <Link href="/Feed">Feed</Link>
    </div>
  );
};

export default HomePage;
