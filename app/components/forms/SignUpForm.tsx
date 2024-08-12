"use client";
import { FaUser, FaLaptopCode, FaGithub, FaLock } from "react-icons/fa";
import Input from "../Layout/Input";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { apiRoute, gitHubApi } from "@/services/api";
import { toast } from "sonner";

type signUpFormProps = {};

const SignUpForm = ({}: signUpFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (userdata: FieldValues) => {
    const githubInfo = await gitHubApi.get(`${userdata.github}`);

    const linkProfilePic = githubInfo.data.avatar_url;
    const profilePic = { profilepic: linkProfilePic };

    const user = { ...userdata, ...profilePic };

    const response = await apiRoute.post("/users/register", user);

    if (response.status !== 201) {
      toast.error(response.data.message);
      return;
    }

    toast.success("Usuário criado com sucesso!");
    reset();
    router.push("/LogIn");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-auto p-2 flex flex-col items-center gap-4 mt-1 md:w-[70%] lg:w-[50%] md:mt-3"
    >
      {/* grid wrapper */}
      <Input label="Nome" type="text" icon={<FaUser />} />
      <Input label="Email" type="text" icon={<IoMail />} />
      <Input label="Profissao" type="text" icon={<FaLaptopCode />} />
      <Input label="Github" type="text" icon={<FaGithub />} />
      <Input label="Senha" type="text" icon={<FaLock />} />

      <button className="px-10 w-full flex flex-row gap-4 items-center justify-center rounded-md shadow-lg shadow-green-haze-900 py-2 bg-green-haze-700 text-white font-medium hover:bg-green-haze-500 transition-all">
        Confirmar
      </button>
      <span className="text-white font-medium text-sm mt-5">
        Já possui uma conta?{" "}
        <Link
          href="/LogIn"
          className="text-green-haze-500 font-medium text-md underline"
        >
          Login
        </Link>
      </span>
    </form>
  );
};

export default SignUpForm;
