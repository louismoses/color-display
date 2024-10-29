import React, { ReactNode } from "react";

type PreviewContainerProps = {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

const PreviewContainer: React.FC<PreviewContainerProps> = ({
    children,
    className,
    style,
}) => {
    return (
        <div
            style={style}
            className={`${className}  h-[30vh] lg:h-full max-h-[40vh] flex flex-col text-center justify-center items-center mix-blend-multiply`}
        >
            {children}
        </div>
    );
};

export default PreviewContainer;
