"use client";
import FormHero from "../components/forms/FormHero";
import SignUpForm from "../components/forms/SignUpForm";

const SignUp = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[85%] h-auto p-5 ring-2 ring-green-haze-500/30 flex flex-col gap-2 items-center rounded-lg shadow-lg shadow-green-haze-400/30 md:py-10  md:px-10 lg:w-[45%] lg:h-auto lg:py-4">
        <FormHero imagePath="/signup-icon.svg" imageAltText="sign up icon">
          <h1 className="text-white font-medium text-lg  mb-2 text-center md:text-xl lg:text-2xl">
            <span className="text-green-haze-500 font-bold">Cadastre-se</span> e
            começe a publicar!
          </h1>
          <span className="text-zinc-100 font-light text-xs mt-[-10px] md:text-sm">
            Venha fazer parte da nossa comunidade!
          </span>
        </FormHero>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
