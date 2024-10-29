import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`${className} rounded  px-4 py-2 cursor-pointer hover:translate-x-1  hover:border-4`}
        >
            {children}
        </div>
    );
};

export default Button;
