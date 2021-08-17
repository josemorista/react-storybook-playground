import React, { FC, HTMLAttributes } from "react";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {

	/** Background color */
	color: string;

	/** Font color */
	fontColor?: string;
}

/** This is a Button */
export const Button: FC<IButtonProps> = ({ color, fontColor, children = "Insert text here", ...rest }) => {
	return <button {...rest} style={{ background: color, borderRadius: "8px", border: "none", padding: "0.6rem", color: fontColor || "white" }}>
		{children}
	</button>
}