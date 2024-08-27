import { ReactNode } from "react";

type appContainerProps = {
  children: ReactNode;
};
const AppContainer = ({ children }: appContainerProps) => {
  return (
    <div className="w-full h-full gap-2 flex flex-col items-center lg:flex-row overflow-y-hidden">
      {children}
    </div>
  );
};

export default AppContainer;
