"use client";
import { FaUser, FaLaptopCode, FaGithub, FaLock } from "react-icons/fa";
import Input from "../Layout/Input/Input";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { apiRoute, gitHubApi } from "@/services/api";
import { toast } from "sonner";
import ConfirmButton from "../Layout/Button/ConfirmButton";

const SignUpForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
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
      className="w-full h-auto p-2 flex flex-col items-center gap-4 mt-1 md:w-[70%] lg:max-w-[400px] md:mt-3"
    >
      {/* grid wrapper */}
      <Input
        control={control}
        name="nome"
        placeholder="Nome"
        type="text"
        icon={<FaUser />}
      />
      <Input
        control={control}
        name="email"
        placeholder="Email"
        type="text"
        icon={<IoMail />}
      />
      <Input
        control={control}
        name="profissao"
        placeholder="Profissao"
        type="text"
        icon={<FaLaptopCode />}
      />
      <Input
        control={control}
        name="github"
        placeholder="Github"
        type="text"
        icon={<FaGithub />}
      />
      <Input
        control={control}
        name="senha"
        placeholder="Senha"
        type="text"
        icon={<FaLock />}
      />

      <ConfirmButton disabled={isSubmitting}>Confirmar</ConfirmButton>
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
