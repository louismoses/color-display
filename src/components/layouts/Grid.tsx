import React from "react";

type GridProps = {
  children: React.ReactNode;
};

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols md:grid-cols-2  p-4 gap-4">{children}</div>
  );
};

export default Grid;
