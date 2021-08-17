import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, IButtonProps } from "../src/Button";

const meta: Meta = {
	title: "Button",
	component: Button,
	argTypes: {
		onClick: {
			action: "click"
		},
		children: {
			defaultValue: "Some text"
		}
	}
};

export default meta;

export const Template: Story<IButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Default.args = {
	color: "red",
	children: "Click me!"
}

Secondary.args = {
	color: "blue",
	children: "Click me!"
}