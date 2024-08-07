import { storyblokEditable, SbBlokData } from "@storyblok/react";
import ButtonComponent from "../Button";

export type ButtonBlokType = SbBlokData & {
	_uid: string;
	link: {
		id: string;
		url: string;
		linktype: "story" | "url";
		fieldtype: string;
		cached_url: string;
		target?: "_blank";
	};
	label: string;
	disabled?: boolean;
	size?: "small" | "medium" | "large" | "";
	variant?: "primary" | "secondary" | "";
	palette?: "peach" | "onyx" | "white" | "";
};

export const Button = ({ blok }: { blok: ButtonBlokType }) => {
	return (
		<div {...storyblokEditable(blok)}>
			<ButtonComponent
				rounded
				href={blok.link?.url}
				disabled={blok.disabled}
				palette={blok.palette || undefined}
				size={blok.size || undefined}
				variant={blok.variant || undefined}
				target={blok.link?.target}
			>
				<span>{blok.label}</span>
			</ButtonComponent>
		</div>
	);
};
