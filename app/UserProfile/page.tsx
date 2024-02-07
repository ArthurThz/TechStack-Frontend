"use client";

import React, { useRef, useState } from "react";
import Input from "../components/Layout/Input/Input";
import Button from "../components/Layout/Button/Button";
import { useEffect } from "react";
import { apiRoute } from "@/services/api";
const UserProfile = () => {
  // states
  const [hideOptions, setHideOptions] = useState("hidden");
  const [hideEdit, setHideEdit] = useState("block");
  const [inputStatus, setInputStatus] = useState(true);
  const [user, setUser] = useState({});
  const [userHeaderInfo, setUserHeaderInfo] = useState({
    nome: "",
    sobrenome: "",
    profissao: "",
    qtdPosts: 0,
    profilePicture: "",
  });

  let userInformation = {};
  const userRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    apiRoute
      .get("/user/12345678910")
      .then((response) => {
        const { data } = response;
        const { nome, sobrenome, profissao } = data[0];

        setUser(data[0]);
        setUserHeaderInfo({
          nome: nome,
          sobrenome: sobrenome,
          profissao: profissao,
          qtdPosts: 0,
          profilePicture: "",
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const UserDataEntries = Object.entries(user);

  const showOptions = () => {
    if (hideOptions === "hidden") {
      setHideOptions("block");
      setHideEdit("hidden");
    }
  };

  const cancelEdit = () => {
    if (hideOptions === "block") {
      setHideEdit("block");
      setHideOptions("hidden");
      console.log(userRef);
    }
  };
  interface IChangeEvent {
    event?: React.ChangeEvent<HTMLTextAreaElement>;
    target: HTMLInputElement;
  }

  return (
    <div className="w-full h-full flex flex-col items-center p-6 overflow-y-auto bg-woodsmoke-950">
      {/* Profile pictture and total amount of posts */}
      <div className="w-full flex flex-row p-10 items-center justify-around">
        <div className="flex flex-col items-center">
          {/* Profile picture */}
          <div className="w-[200px] h-[200px] bg-green-haze-500 rounded-full mb-2"></div>
          {/* Professional role */}
          <div className="w-auto h-auto p-1 text-md text-white text-center tracking-wider">
            <p className="flex flex-row gap-3 items-center">
              <span>{userHeaderInfo.nome}</span>
              <span>{userHeaderInfo.sobrenome}</span>
            </p>
            <p>{userHeaderInfo.profissao}</p>
          </div>
        </div>
        {/* Total Amount of posts */}
        <div className="w-auto h-auto flex flex-col items-center justify-center gap-4 text-white">
          <h1 className="text-6xl font-bold">0</h1>
          <p className="text-xl">Posts</p>
        </div>
      </div>
      <div className="w-full h-auto flex px-5 flex-row items-center gap-5 justify-end">
        <Button
          label="Editar"
          variant="secondary"
          classname={hideEdit}
          onclick={showOptions}
        />
        <Button
          label="Confirmar"
          variant="secondary"
          classname={hideOptions}
          onclick={() => ""}
        />
        <Button
          label="Cancelar"
          variant="secondary"
          classname={hideOptions}
          onclick={cancelEdit}
        />
      </div>
      {/* Render the inputs based on user information */}
      <div className="w-full">
        <form className="w-full h-auto grid grid-cols-2 grid-rows-3 gap-7 p-6">
          {hideOptions === "hidden"
            ? UserDataEntries.map(([field, userinfo], index) => (
                <input
                  className="input"
                  key={index}
                  // label={field}
                  name={field}
                  type={field === "senha" ? "password" : "text"}
                  placeholder={field === "senha" ? "" : `${userinfo}`}
                  disabled
                  autoComplete="off"

                  // value={`${userinfo}`}
                />
              ))
            : UserDataEntries.map(([field, userinfo], index) => (
                <input
                  className="input"
                  key={index}
                  name={field}
                  type={field === "senha" ? "password" : "text"}
                  ref={userRef}
                  // value={`${userinfo}`}
                />
              ))}
          {/* {UserDataEntries.map(([field, userinfo], index) => (
            <Input
              key={index}
              label={field}
              name={field}
              type={field === "senha" ? "password" : "text"}
              placeholder={field === "senha" ? "" : `${userinfo}`}
              disabled={inputStatus}
              // value={`${userinfo}`}
            />
          ))} */}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
