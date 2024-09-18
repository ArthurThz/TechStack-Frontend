import Image from "next/image";
import { ReactNode } from "react";

type FormHeroProps = {
  imagePath?: string;
  imageAltText: string;
  children: ReactNode;
};
const FormHero = ({ children, imagePath, imageAltText }: FormHeroProps) => {
  return (
    <div className="flex flex-col w-auto h-auto items-center ">
      {imagePath && (
        <Image
          alt={imageAltText}
          src={imagePath}
          width={500}
          height={500}
          className="w-[200px] iphonexr:w-[250px] md:w-[300px] lg:w-[400px] h-auto"
        />
      )}
      {children}
    </div>
  );
};

export default FormHero;
