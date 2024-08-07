import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { Carousel } from "./Carousel";
import { HeadlineBlokType } from "../Headline";
import { ReviewCardBlockType } from "../ReviewCard";

type CarouselBlokType = SbBlokData & {
	headline?: HeadlineBlokType[];
	palette?: "onyx" | "white" | "";
	topPadding?: boolean;
	cards?: ReviewCardBlockType[];
};

export const CarouselSection = ({ blok }: { blok: CarouselBlokType }) => {
	return (
		<div {...storyblokEditable(blok)}>
			<Carousel
				headline={blok.headline?.length ? blok.headline[0] : undefined}
				palette={blok.palette || undefined}
				paddingTop={blok.topPadding || undefined}
				cards={blok.cards}
			/>
		</div>
	);
};
