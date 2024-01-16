"use client";

import React, { useState } from "react";
import Input from "../components/Layout/Input/Input";
import Button from "../components/Layout/Button/Button";
import { IUserData } from "./types";
import { useEffect } from "react";
import { apiRoute } from "@/services/api";
import { userInfo } from "os";

const UserProfile = () => {
  const [hideOptions, setHideOptions] = useState("hidden");
  const [hideEdit, setHideEdit] = useState("block");
  const [inputStatus, setInputStatus] = useState(true);
  const [user, setUser] = useState({});
  let userInformation = {};

  useEffect(() => {
    apiRoute
      .get("/user/12345678910")
      .then((response) => {
        const { data } = response;
        setUser(data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  const UserDataEntries = Object.entries(user);

  const showOptions = () => {
    if (hideOptions === "hidden") {
      setHideOptions("block");
      setHideEdit("hidden");
      setInputStatus(false);
    } else {
      setHideOptions("hidden");
      setHideEdit("block");
      userInformation = user;
      setInputStatus(true);
    }
  };
  interface IChangeEvent {
    event?: React.ChangeEvent<HTMLTextAreaElement>;
    target: HTMLInputElement;
  }
  const handleOnChange = (event: IChangeEvent) => {
    const { value, name } = event.target;
    if (name != "cpf") {
      userInformation = { ...userInformation, [name]: value };
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center p-6 overflow-y-auto bg-woodsmoke-950">
      {/* Profile pictture and total amount of posts */}
      <div className="w-full flex flex-row p-10 items-center justify-around">
        <div className="flex flex-col items-center">
          {/* Profile picture */}
          <div className="w-[200px] h-[200px] bg-green-haze-500 rounded-full mb-2"></div>
          {/* Professional role */}
          <div className="w-auto h-auto p-1 text-md text-white text-center tracking-wider">
            <p>Arthur Theodoro</p>
            <p>Front End Developer</p>
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
          onclick={showOptions}
        />
      </div>
      {/* Render the inputs based on user information */}
      <div className="w-full h-auto grid grid-cols-2 grid-rows-3 gap-7 p-6">
        {UserDataEntries.map(([field, userinfo], index) => (
          <Input
            key={index}
            label={field}
            name={field}
            type="text"
            placeholder={`${userinfo}`}
            disabled={inputStatus}
            value={`${userinfo}`}
            onChange={handleOnChange}
          />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
