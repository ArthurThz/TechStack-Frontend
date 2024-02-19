import Image from "next/image";
import Link from "next/link";
type UserProps = {
  user: {
    nome: string;
    sobrenome: string;
    profissao: string;
    qtdPosts: string;
  };
};

const UserHeader = ({ user }: UserProps) => {
  return (
    <>
      <div className="rounded-full flex items-center justify-center w-44 h-44 bg-green-haze-500 ring-2 ring-green-haze-500">
        <Image
          className="w-full h-full rounded-full object-cover"
          alt="profile pic"
          width={30}
          height={30}
          src="/profile-pic2.jpg"
          unoptimized
        />
      </div>
      <div className="flex flex-row w-auto h-full px-2 justify-center">
        <div className="w-auto flex flex-col items-start gap-4 text-white">
          {user && (
            <>
              <h1 className="font-medium text-2xl ">{`${user.nome} ${user.sobrenome}`}</h1>
              <span>{user.profissao}</span>
              <span>{`${user.qtdPosts} Posts`}</span>
            </>
          )}

          <Link
            className="border border-green-haze-500 px-4 py-2 rounded-md hover:bg-green-haze-500 transition-all"
            href="/"
          >
            Editar Perfil
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserHeader;
