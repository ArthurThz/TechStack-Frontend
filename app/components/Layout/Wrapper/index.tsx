import { ReactNode } from "react";

type wrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: wrapperProps) => {
  return <div className="w-full flex flex-col items-center">{children}</div>;
};

export default Wrapper;
