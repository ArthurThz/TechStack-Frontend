import Image from "next/image";

type ErrorProps = {
  errorMessage: string;
};

const Error = ({ errorMessage }: ErrorProps) => {
  console.log(errorMessage);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-4  gap-4">
      <Image
        className="lg:w-[500px]"
        alt="Error SVG image"
        src="error-image.svg"
        width={350}
        height={300}
      />
      <h1 className="text-3xl text-red-600 font-bold">
        Parece que algo deu errado :(
      </h1>
      <h2 className="text-xl text-white font-medium text-center">
        Estamos trabalhando para identificar o problema, tente novamente mais
        tarde!
      </h2>
    </div>
  );
};

export default Error;
