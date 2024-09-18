"use client";

import { useAppSelector } from "@/redux/store";
import UserHeader from "../components/pages/Profile/UserHeader";
import UserPostContainer from "../components/Post/User/UserPostContainer";
import { useUserProfileHeader } from "../hooks/useUserProfile";
import Loader from "../components/Layout/Loader";
import Error from "../components/Error/Error";

const UserProfile = () => {
  const { id, token } = useAppSelector((state) => state.authReducer.value);

  const {
    user,
    userProfileError,
    posts,
    handleOnDeletePost,
    isLoadingProfile,
  } = useUserProfileHeader({ id, token });

  if (userProfileError)
    return (
      <Error
        code={userProfileError.code}
        title={userProfileError.title}
        message={userProfileError.message}
      />
    );

  if (isLoadingProfile) return <Loader />;

  return (
    <div className="flex flex-col w-full gap-10 items-center py-10 oveflow-y-auto">
      {user && (
        <>
          <UserHeader user={user} />

          <UserPostContainer posts={posts} onNoteDeleted={handleOnDeletePost} />
        </>
      )}
    </div>
  );
};

export default UserProfile;
