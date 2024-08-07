import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { HeadlineBlokType } from "../Headline";
import { StoryblokComponent } from "@storyblok/react";
import { ReviewCardBlockType } from "../ReviewCard";

const COLORS = {
	onyx: {
		"--bg-color": "var(--palette-primary-dark)",
		"--color": "var(--palette-font-white)",
		"--dots-inactive-color": "var(--palette-onyx-60)",
		"--nav-button-color": "var(--palette-onyx-60)"
	},
	white: {
		"--bg-color": "#fff",
		"--color": "var(--dark-text)",
		"--dots-inactive-color": "hsla(0, 0%, 11%, 0.21)",
		"--nav-button-color": "var(--palette-onyx-100)"
	}
};

const OuterWrapper = styled.div<{ backgroundColor: string; paddingTop: boolean }>`
	--padding-block: var(--spacing-5);

	width: 100%;
	background-color: ${({ backgroundColor }) => backgroundColor};

	@media (min-width: 600px) {
		--padding-block: var(--spacing-5);
	}

	@media (min-width: 900px) {
		--padding-block: var(--spacing-7);
	}

	@media (min-width: 1200px) {
		--padding-block: var(--spacing-10);
	}

	padding-bottom: var(--padding-block);
	${({ paddingTop }) => paddingTop && "padding-top: var(--padding-block);"};
`;

const Wrapper = styled.div`
	width: 100%;
	margin-top: 40px;
	margin-bottom: 40px;
	padding-left: 80px;
	overflow: hidden;
`;

const CarouselWrapper = styled.div<{
	$curr: number;
	$translateX: number;
	$cardGap: number;
}>`
	--translateX: ${(p) => {
		return `${p.$curr >= 1 ? p.$curr * p.$translateX * -1 : 0}px`;
	}};
	display: flex;
	gap: ${(p) => p.$cardGap}px;

	transform: translateX(var(--translateX));
	transition: 1s;
`;

const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px 0 20px;
	margin-top: 20px;
`;

const ArrowsContainer = styled.div`
	display: flex;
	gap: 15px;
	align-items: center;
	padding: 0 20px 0 20px;
`;

const Arrow = styled.div<{ color: string }>`
	border-radius: 50%;
	height: 48px;
	width: 48px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	background-color: var(--palette-onyx-20);

	:hover {
		background-color: var(--dark-text);
	}
`;

const DotsWrapper = styled.div`
	display: flex;
	gap: 5px;
`;

const Dot = styled.div<{
	$active: boolean;
	$inactiveColor: string;
}>`
	background-color: ${(p) => {
		return p.$active ? "var(--palette-primary-peach-60)" : p.$inactiveColor;
	}};
	border-radius: 50%;
	height: 8px;
	width: 8px;
	border: none;
	cursor: pointer;
`;

type CarouselProps = {
	headline?: HeadlineBlokType;
	cards?: ReviewCardBlockType[];
	palette?: "onyx" | "white";
	paddingTop?: boolean;
};

export const Carousel = ({ headline, cards = [], palette = "white", paddingTop }: CarouselProps) => {
	const styles = {
		...COLORS[palette]
	};

	const [viewWidth, setViewWidth] = useState(1);
	const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const carouselRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const [wrapperWidth, setWrapperWidth] = useState(1);
	const [curr, setCurr] = useState(0);
	const [displayableItems, setDisplayableItems] = useState(1);
	const firstCardRef = useRef() as React.MutableRefObject<HTMLDivElement> | undefined;

	const cardOffset = 15;
	const cardGap = 24;

	const renderedCards = cards.map((card, idx) => {
		return (
			<div ref={idx === 0 ? firstCardRef : null} key={card._uid}>
				<StoryblokComponent
					className=""
					blok={{
						...card,
						offset: idx % 2 === 0 ? 0 : cardOffset
					}}
				/>
			</div>
		);
	});

	const firstCardWidth = firstCardRef?.current?.clientWidth ?? 100;

	useEffect(() => {
		window.addEventListener("resize", updateViewWidth);
		if (wrapperRef.current && renderedCards) {
			setWrapperWidth(wrapperRef.current.clientWidth);
		}
	}, [viewWidth, renderedCards]);

	useEffect(() => {
		if (Array.isArray(renderedCards)) {
			setDisplayableItems(Math.floor(carouselRef.current.clientWidth / (firstCardWidth + cardGap)));
		}
	}, [wrapperWidth, renderedCards, displayableItems, firstCardWidth]);

	const updateViewWidth = () => {
		setViewWidth(window?.innerWidth);
	};

	const blocks = Array.isArray(cards) ? Math.ceil(cards?.length / (displayableItems === 0 ? 1 : displayableItems)) : 0;

	const prev = () => setCurr((curr) => (curr === 0 ? 0 : curr - 1));

	const next = () => {
		if (typeof blocks === "number") {
			setCurr((curr) => (curr >= blocks - 1 ? curr : curr + 1));
		}
	};

	const dots = Array.from({ length: blocks }, (_, i) => (
		<Dot
			key={i}
			$active={curr === i ? true : false}
			$inactiveColor={styles["--dots-inactive-color"]}
			onClick={() => {
				setCurr(i);
			}}
		/>
	));

	const translateX = displayableItems * (firstCardWidth + cardGap);

	return (
		<OuterWrapper backgroundColor={styles["--bg-color"]} paddingTop={!!paddingTop}>
			{headline ? (
				<StoryblokComponent
					className=""
					blok={{
						...headline,
						palette
					}}
				/>
			) : null}

			<Wrapper ref={wrapperRef}>
				<CarouselWrapper $curr={curr} $translateX={translateX} ref={carouselRef} $cardGap={cardGap}>
					{renderedCards}
				</CarouselWrapper>
				<NavContainer>
					<DotsWrapper>{dots}</DotsWrapper>
					<ArrowsContainer>
						<Arrow onClick={prev} color={styles["--nav-button-color"]}>
							<LeftArrow />
						</Arrow>
						<Arrow onClick={next} color={styles["--nav-button-color"]}>
							<RightArrow />
						</Arrow>
					</ArrowsContainer>
				</NavContainer>
			</Wrapper>
		</OuterWrapper>
	);
};

const LeftArrow = () => {
	return (
		<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M20 10.999H7.83l5.59-5.59L12 3.999l-8 8 8 8 1.41-1.41-5.58-5.59H20v-2Z" fill="currentColor" />
		</svg>
	);
};

const RightArrow = () => {
	return (
		<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="m12 3.999-1.41 1.41 5.58 5.59H4v2h12.17l-5.58 5.59 1.41 1.41 8-8-8-8Z" fill="currentColor" />
		</svg>
	);
};
