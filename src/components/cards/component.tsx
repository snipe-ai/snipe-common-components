import { CommonProps } from "../../@types/common";
import clsx from "clsx";

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        CommonProps {
    children?: React.ReactNode;
    bgColor?: string;
    borderRadius?: string;
    borderWidth?: string;
    borderColor?: string;
    padding?: string;
    extraStyles?: string;
}

const Component: React.FC<CardProps> = ({
    children,
    bgColor,
    borderRadius,
    padding,
    extraStyles,
    borderColor,
    borderWidth,
}) => {
    return (
        <div
            className={clsx(
                bgColor ? bgColor : "bg-white",
                borderRadius ? `rounded-[${borderRadius}px]` : "rounded-[3px]",
                padding ? padding : "p-[12px]",
                borderColor ? borderColor : "border-[#eaeaea]",
                borderWidth ? borderWidth : "border-[2px]",
                extraStyles ? extraStyles : "",
                "overflow-hidden"
            )}
        >
            {children}
        </div>
    );
};

export default Component;
