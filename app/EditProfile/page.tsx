"use client";

import { useAppSelector } from "@/redux/store";
import EditProfileForm from "../components/forms/EditProfileForm";

const EditProfile = () => {
  const { id } = useAppSelector((state) => state.authReducer.value);

  return (
    <div className="bg-zinc-900 w-full py-10 px-5 h-screen flex flex-col items-center">
      <EditProfileForm id={id} />
    </div>
  );
};

export default EditProfile;
