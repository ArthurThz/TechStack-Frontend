import { ReactNode } from "react";

type appContainerProps = {
  children: ReactNode;
};
const AppContainer = ({ children }: appContainerProps) => {
  return (
    <div className="w-full lg:ml-[10%] flex flex-col items-center lg:flex-row ">
      {children}
    </div>
  );
};

export default AppContainer;
