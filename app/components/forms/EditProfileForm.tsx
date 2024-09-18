import { apiRoute } from "@/services/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import ConfirmButton from "../Layout/Button/ConfirmButton";
import Button from "../Layout/Button/Button";
import Loader from "../Layout/Loader";
import LabeledInput from "../Layout/Input/LabeledInput";

type EditProfileFormProps = {
  id: string;
};

const EditProfileForm = ({ id }: EditProfileFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const getPost = async () => {
    const response = await apiRoute.get(`/user/${id}`);
    return response.data[0];
  };

  const { control, handleSubmit } = useForm({
    defaultValues: async () => {
      const response = getPost();
      setIsLoading(false);
      return response;
    },
  });

  const onSubmit = async (postData: FieldValues) => {
    setIsLoading(true);
    const response = await apiRoute.put(`/post/${id}`, postData);

    const { status, data } = response;

    setIsLoading(false);

    if (status !== 200) {
      toast.error("Algo deu errado, tente novamente");
      console.log(status);
      console.log(data);
      return;
    }

    toast.success("Informações atualizadas com sucesso!");
  };

  if (isLoading) return <Loader />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-4 flex flex-col gap-4 items-center lg:w-[50%]"
    >
      <h1 className="text-2xl mt-4 text-white font-bold lg:mb-10">
        Editar Perfil
      </h1>
      <LabeledInput control={control} label="Nome" name="nome" type="text" />
      <LabeledInput control={control} label="Email" name="email" type="text" />
      <LabeledInput
        control={control}
        label="Profissão"
        name="profissao"
        type="text"
      />
      <LabeledInput
        control={control}
        label="Senha"
        name="senha"
        type="password"
      />
      <LabeledInput
        control={control}
        label="GitHub"
        name="github"
        type="text"
      />
      <div className="w-full flex justify-end gap-2">
        <ConfirmButton customClassName="w-[150px]">Confirmar</ConfirmButton>
        <Button
          label="cancelar"
          variant="secondary"
          onclick={() => router.push("UserProfile")}
        />
      </div>
    </form>
  );
};

export default EditProfileForm;
