"use client";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { FiPlusCircle } from "react-icons/fi";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { apiRoute } from "@/services/api";
import { useAppSelector } from "@/redux/store";
import { toast } from "sonner";
import { useState } from "react";
import HeroSection from "../components/pages/NewPost/hero";
import HeroItem from "../components/pages/NewPost/hero-item";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
import Logo from "../components/Layout/Logo";

const NewPost = () => {
  const { id } = useAppSelector((state) => state.authReducer.value);
  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm();

  const [open, setOpen] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    const newPost = {
      ...data,
      id,
    };

    const response = await apiRoute.post("/post", newPost);

    if (response.status !== 201) {
      toast.error("Algo deu errado, tente novamente!", {
        position: "bottom-left",
      });
      return;
    }

    toast.success("Publicação criada!", {
      position: "bottom-left",
    });
    reset();
    setOpen(false);
  };
  return (
    <div className="w-full h-full">
      <HeroSection>
        <HeroItem
          alt="imagem do astronauta"
          imagePath="/pilot.svg"
          text="Crie publicações para alcançar o máximo de pessoas e contribuir para o crescimento da nossa comunidade!"
        />
        <HeroItem
          alt="imagem do astronauta"
          imagePath="/rocket.svg"
          text="Crie publicações para alcançar o máximo de pessoas e contribuir para o crescimento da nossa comunidade!"
        />
        <Link
          href="/Posts/NewPost"
          className="bg-green-haze-700 w-auto flex flex-row gap-5 items-center py-4 px-5 rounded-md transition-all text-white hover:bg-green-haze-900"
        >
          Criar Publicação
          <FaPlusCircle />
        </Link>
      </HeroSection>
    </div>
  );
};

export default NewPost;
