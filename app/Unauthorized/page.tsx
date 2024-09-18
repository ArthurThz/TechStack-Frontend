import Image from "next/image";
import Link from "next/link";

const Unauthorized = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-20 px-4 gap-4">
      <Image
        src="./unauthorized.svg"
        width={500}
        height={500}
        alt="unauthorized icon"
      />
      <h1 className="text-red-500 text-4xl font-bold">Não autorizado!</h1>
      <h2 className="text-white font-medium text-md text-center lg:text-2xl">
        Você não tem permissão para acessar esta área, faça login para continuar
      </h2>
      <Link
        href="/LogIn"
        className="text-white font-bold text-lg border-2 shadow-sm shadow-red-500 bg-zinc-800 border-red-500 rounded-md px-8 py-1 hover:shadow-md hover:shadow-red-500  transition-all"
      >
        Login
      </Link>
    </div>
  );
};

export default Unauthorized;
