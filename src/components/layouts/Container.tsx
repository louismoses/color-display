import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full  p-8 bg-neutral-50">{children}</div>;
};

export default Container;
