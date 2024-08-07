import { SbBlokData, storyblokEditable, StoryblokComponent } from "@storyblok/react";
import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { H2, P } from "../Typography";
import { ButtonBlokType } from "./Button";

const COLORS = {
	onyx: {
		"--bg-color": "var(--palette-primary-dark)",
		"--color": "var(--palette-font-white)"
	},
	white: {
		"--bg-color": "#fff",
		"--color": "var(--dark-text)"
	},
	peach: {
		"--bg-color": "var(--palette-primary-peach-60)",
		"--color": "var(--dark-text)"
	}
};

const Columns = styled.div<{ alignment: "left" | "center" }>`
	display: flex;
	flex-direction: column;
	align-items: ${({ alignment }) => alignment};
	text-align: ${({ alignment }) => (alignment === "left" ? "start" : "center")};
`;

export const Tagline = styled(P)`
	font-weight: 700;
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
`;

export const Component = ({
	tagline,
	title = "Used by the world's most average companies",
	subtitle,
	palette = "white",
	buttons = [],
	alignment = "left",
	wideTitle = false
}: {
	tagline?: string;
	title?: string;
	subtitle?: string;
	palette?: "onyx" | "white" | "peach";
	buttons?: ButtonBlokType[];
	alignment?: "left" | "center";
	wideTitle?: boolean;
}) => {
	const styles = {
		...COLORS[palette]
	};

	const renderedButtons = buttons?.length
		? buttons.map((button, idx) => {
				return (
					<StoryblokComponent
						className=""
						blok={{
							...button,
							palette: idx === 0 ? "peach" : palette === "onyx" ? "white" : "onyx",
							variant: idx === 0 ? "primary" : "secondary"
						}}
						key={button._uid}
					/>
				);
		  })
		: null;

	return (
		<div style={{ backgroundColor: styles["--bg-color"], color: styles["--color"] }}>
			{wideTitle ? <H2 style={{ textAlign: alignment === "left" ? "start" : "center" }}>{title}</H2> : null}
			<MaxWidthWrapper>
				<Columns alignment={alignment}>
					{tagline ? <Tagline>{tagline}</Tagline> : null}
					{!wideTitle ? <H2>{title}</H2> : null}
					<P>{subtitle}</P>
					{renderedButtons ? <ButtonWrapper>{renderedButtons}</ButtonWrapper> : null}
				</Columns>
			</MaxWidthWrapper>
		</div>
	);
};

export type HeadlineBlokType = SbBlokData & {
	tagline?: string;
	title?: string;
	subtitle?: string;
	wideTitle?: boolean;
	palette?: "onyx" | "white" | "peach" | "";
	buttons?: ButtonBlokType[];
	alignment?: "left" | "center" | "";
};

export const Headline = ({ blok }: { blok: HeadlineBlokType }) => {
	return (
		<div {...storyblokEditable(blok)}>
			<Component
				tagline={blok.tagline || undefined}
				title={blok.title || undefined}
				subtitle={blok.subtitle || undefined}
				wideTitle={blok.wideTitle || undefined}
				palette={blok.palette || undefined}
				buttons={blok.buttons}
				alignment={blok.alignment || undefined}
			/>
		</div>
	);
};
