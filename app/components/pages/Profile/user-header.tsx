import Image from "next/image";
import Link from "next/link";
type UserProps = {
  user: {
    nome: string;
    profissao: string;
    qtdPosts: string;
    profilepic: string;
  };
};

const UserHeader = ({ user }: UserProps) => {
  return (
    <div className="flex flex-row items-center gap-10">
      <div className="rounded-full flex items-center justify-center w-32 h-32 md:w-44 md:h-44 ring-2 ring-green-haze-500">
        <Image
          className="w-full md:h-full rounded-full object-cover"
          alt="profile pic"
          width={30}
          height={30}
          src={user.profilepic}
          unoptimized
        />
      </div>
      <div className="flex flex-row w-auto h-full px-2 justify-center">
        <div className="w-auto flex flex-col items-start gap-4 text-white">
          {user && (
            <>
              <h1 className="font-medium text-2xl ">{`${user.nome}`}</h1>
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
    </div>
  );
};

export default UserHeader;
