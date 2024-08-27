"use client";

import { apiRoute } from "@/services/api";

import { useAppSelector } from "@/redux/store";
import UserHeader from "../components/pages/Profile/user-header";
import { toast } from "sonner";
import UserPostContainer from "../components/Post/User/UserPostContainer";
import { useUserPosts } from "../hooks/useUserPosts";
import Loader from "../components/Layout/Loader";

const UserProfile = () => {
  const { id } = useAppSelector((state) => state.authReducer.value);
  const { posts, user, setPosts } = useUserPosts({ id });

  const handleOnDeletePost = async (id: string) => {
    const response = await apiRoute.delete(`/post/${id}`);

    const { status } = response;

    if (status != 204) {
      alert("Não foi possivel excluir a publicação, tente novamente!");
      return;
    }

    const postsArray = posts.filter((item) => {
      return item.id !== id;
    });

    toast.success("Post deletado com sucesso!", {
      position: "bottom-left",
    });

    setPosts(postsArray);
  };

  if (!posts || !user) {
    return <Loader />;
  }
  return (
    <div className="w-full h-full flex flex-col items-center px-4 md:px-6 py-10 bg-zinc-900">
      <div className="flex flex-col w-full gap-10 items-center py-10 oveflow-y-auto">
        <UserHeader user={user} />

        <UserPostContainer posts={posts} onNoteDeleted={handleOnDeletePost} />
      </div>
    </div>
  );
};

export default UserProfile;
