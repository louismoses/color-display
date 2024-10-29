import React from "react";

type GridItemProps = {
  children: React.ReactNode;
  className?: string;
};

const GridItem: React.FC<GridItemProps> = ({ children, className }) => {
  return (
    <div
      className={`rounded-lg h-full max-h-[40vh] md:max-h-[90vh] ${className}`}
    >
      {children}
    </div>
  );
};

export default GridItem;
