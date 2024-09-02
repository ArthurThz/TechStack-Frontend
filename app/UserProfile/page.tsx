"use client";

import { useAppSelector } from "@/redux/store";
import UserHeader from "../components/pages/Profile/UserHeader";
import UserPostContainer from "../components/Post/User/UserPostContainer";
import { useUserPosts } from "../hooks/useUserPosts";
import { useUserProfileHeader } from "../hooks/useUserProfileHeader";
import Loader from "../components/Layout/Loader";
import { useEffect } from "react";
import EmptyPosts from "../components/Post/User/EmptyPosts";

const UserProfile = () => {
  const { id } = useAppSelector((state) => state.authReducer.value);
  const { posts, handleOnDeletePost, isLoadingPosts } = useUserPosts({ id });
  const { user } = useUserProfileHeader({ id });

  if (!user) return <Loader />;
  return (
    <div className="flex flex-col w-full gap-10 items-center py-10 oveflow-y-auto">
      <UserHeader user={user} />

      <UserPostContainer posts={posts} onNoteDeleted={handleOnDeletePost} />
    </div>
  );
};

export default UserProfile;
