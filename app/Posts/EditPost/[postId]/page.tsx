"use client";

import EditPostForm from "@/app/components/forms/EditPostForm";
const Post = ({ params }: { params: { postId: string } }) => {
  return (
    <div className="w-full h-screen  flex flex-col items-center p-10 bg-zinc-900 gap-4">
      <h1 className="text-green-haze-500 text-2xl font-medium">
        Editar Publicação
      </h1>
      <EditPostForm id={params.postId} />
    </div>
  );
};

export default Post;
