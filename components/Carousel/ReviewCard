import { storyblokEditable, SbBlokData } from "@storyblok/react";
import styled from "styled-components";
import { AssetType, generateSampleRichTextParagraph } from "../../storyblok";
import { StoryblokRichtext } from "storyblok-rich-text-react-renderer";
import { RichText, hasRichText } from "./RichText";
import { H3, P } from "../Typography";

const Wrapper = styled.div<{
	offset: number;
}>`
	height: 455px;
	width: 441px;
	padding: 32px;
	border-radius: 16px;
	background-color: var(--palette-peach-20);
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	top: ${(p) => p.offset}px;

	@media (max-width: 600px) {
		width: 310px;
	}
`;

const Quote = () => {
	return (
		<svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.6482 0L19.4373 4.18663L13.4402 18.1043L18.9847 29.8722C17.9286 31.3054 16.6085 32.701 15.0244 34.0588C13.5157 35.4166 12.1201 36.3218 10.8377 36.7745C8.95187 36.4727 6.99056 35.5675 4.95382 34.0588C2.91708 32.4747 1.40839 30.702 0.427734 28.7407V21.3858C1.10665 19.6508 2.0873 17.5386 3.36969 15.0492C4.65208 12.4845 6.12306 9.88196 7.78263 7.24174C9.44219 4.52609 11.064 2.11217 12.6482 0ZM42.0677 4.18663L36.0707 18.1043L41.6151 29.8722C40.559 31.3054 39.2389 32.701 37.6548 34.0588C36.1461 35.4166 34.7506 36.3218 33.4682 36.7745C31.5823 36.4727 29.621 35.5675 27.5843 34.0588C25.5475 32.4747 24.0388 30.702 23.0582 28.7407V21.3858C23.7371 19.6508 24.7177 17.5386 26.0001 15.0492C27.2825 12.4845 28.7535 9.88196 30.4131 7.24174C32.0726 4.52609 33.6945 2.11217 35.2786 0L42.0677 4.18663Z"
				fill="#FFB18F"
			/>
		</svg>
	);
};

const Flex = styled.div<{ direction: "column" | "row"; gap: number }>`
	display: flex;
	gap: ${({ gap }) => gap}px;
	flex-direction: ${({ direction }) => direction};
`;

const AvatarContainer = styled.div<{
	height: number;
	width: number;
}>`
	height: ${({ height }) => height}px;
	width: ${({ width }) => width}px;
	border-radius: 50%;
	overflow: hidden;
	background-color: var(--palette-peach-50);
`;

const Bold = styled.p`
	font-weight: 400;
`;

const FlexGroup = styled.div``;

const Component = ({
	title,
	offset,
	description = generateSampleRichTextParagraph("I love Humanitix"),
	avatar,
	name,
	role
}: {
	title?: string;
	offset: number;
	description?: StoryblokRichtext;
	avatar?: AssetType;
	name?: string;
	role?: string;
}) => {
	const avatarSize = 48;
	const renderedAvatar = avatar?.filename ? (
		// eslint-disable-next-line @next/next/no-img-element
		<img src={avatar.filename} alt={avatar.alt} style={{ objectFit: "cover" }} height={avatarSize} width={avatarSize} />
	) : null;

	return (
		<Wrapper offset={offset}>
			<Flex direction="column" gap={16}>
				<Quote />
				<FlexGroup>
					<H3>{title}</H3>
					<RichText document={description} />
				</FlexGroup>
			</Flex>
			<Flex direction="row" gap={24}>
				<AvatarContainer height={avatarSize} width={avatarSize}>
					{renderedAvatar}
				</AvatarContainer>
				<FlexGroup>
					<Bold>{name}</Bold>
					<P>{role}</P>
				</FlexGroup>
			</Flex>
		</Wrapper>
	);
};

export type ReviewCardBlockType = SbBlokData & {
	name?: string;
	role?: string;
	title?: string;
	avatar?: AssetType;
	description?: StoryblokRichtext;
	offset: number;
};

export const ReviewCard = ({ blok }: { blok: ReviewCardBlockType }) => {
	return (
		<div {...storyblokEditable(blok)}>
			<Component
				title={blok.title}
				offset={blok.offset}
				description={hasRichText(blok.description) ? blok.description : undefined}
				avatar={blok.avatar}
				name={blok.name}
				role={blok.role}
			/>
		</div>
	);
};
