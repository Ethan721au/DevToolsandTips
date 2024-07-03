import { useEffect, useRef, useState, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	margin-top: 40px;
	margin-bottom: 40px;
`;

const CarouselWrapper = styled.div<{
	$curr: number;
	$translateX: number;
}>`
	--translateX: ${(p) => {
		return `${p.$curr * p.$translateX * -1}px`;
	}};
	display: flex;
	transform: translateX(var(--translateX));
	transition: 1s;
`;

const ItemContainer = styled.div<{
	$width: string;
	$padding: string;
}>`
	overflow: wrap;
	overflow-wrap: break-word;
	min-width: ${(p) => p.$width};
	padding: ${(p) => p.$padding};
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
`;

const Arrow = styled.div`
	border-radius: 50%;
	height: 48px;
	width: 48px;
	border: 1px solid black;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const DotsWrapper = styled.div`
	display: flex;
	gap: 5px;
`;

const Dot = styled.div<{
	$active: boolean;
	$accentColor: string;
}>`
	background-color: ${(p) => {
		return p.$active ? p.$accentColor : "hsla(0, 0%, 11%, 0.21)";
	}};
	border-radius: 50%;
	height: 8px;
	width: 8px;
	border: none;
	cursor: pointer;
`;

const reconstructChildrenArray = (children: JSX.Element[], displayableItems: number) => {
	const reconstructedArray = [];
	for (let i = 0; i < children.length; i += displayableItems) {
		reconstructedArray.push(children.slice(i, i + displayableItems));
	}
	return reconstructedArray;
};

type CarouselProps = {
	padding: number;
	children: ReactNode;
	width: number;
	accentColor: string;
};

export const CarouselCMS = ({ children, padding, width, accentColor }: CarouselProps) => {
	const [viewWidth, setViewWidth] = useState(1);
	const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const carouselRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const [wrapperWidth, setWrapperWidth] = useState(1);
	const [curr, setCurr] = useState(0);
	const [reconstructedArray, setReconstructedArray] = useState<ReactNode[]>([]);
	const [displayableItems, setDisplayableItems] = useState(1);

	useEffect(() => {
		window.addEventListener("resize", updateViewWidth);
		if (wrapperRef.current && children) {
			setWrapperWidth(wrapperRef.current.clientWidth);
		}
	}, [viewWidth, children]);

	useEffect(() => {
		if (Array.isArray(children)) {
			setDisplayableItems(Math.floor(wrapperRef.current.clientWidth / width));
			setReconstructedArray(reconstructChildrenArray(children, displayableItems));
		}
	}, [wrapperWidth, children, width, displayableItems]);

	const updateViewWidth = () => {
		setViewWidth(window?.innerWidth);
	};

	const items =
		Array.isArray(children) &&
		children?.map((child: JSX.Element, childIdx: number) => (
			<ItemContainer key={childIdx} $width={`${width}px`} $padding={`${padding}px`}>
				{child}
			</ItemContainer>
		));

	const blocks = Array.isArray(children) && Math.ceil(children?.length / displayableItems);

	const prev = () => setCurr((curr) => (curr === 0 ? 0 : curr - 1));

	const next = () => {
		if (typeof blocks === "number") {
			setCurr((curr) => (curr >= blocks - 1 ? curr : curr + 1));
		}
	};

	const dots = reconstructedArray.map((_, i) => (
		<Dot
			key={i}
			$active={curr === i ? true : false}
			$accentColor={accentColor}
			onClick={() => {
				setCurr(i);
			}}
		/>
	));

	const translateX = displayableItems * width;

	return (
		<>
			<Wrapper ref={wrapperRef}>
				<CarouselWrapper $curr={curr} $translateX={translateX} ref={carouselRef}>
					{items}
				</CarouselWrapper>
				<NavContainer>
					<DotsWrapper>{dots}</DotsWrapper>
					<ArrowsContainer>
						<Arrow onClick={prev}>
							<LeftArrow />
						</Arrow>
						<Arrow onClick={next}>
							<RightArrow />
						</Arrow>
					</ArrowsContainer>
				</NavContainer>
			</Wrapper>
		</>
	);
};

const LeftArrow = () => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M20 10.999H7.83L13.42 5.40902L12 3.99902L4 11.999L12 19.999L13.41 18.589L7.83 12.999H20V10.999Z"
				fill="#28211E"
			/>
		</svg>
	);
};

const RightArrow = () => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 3.99902L10.59 5.40902L16.17 10.999H4V12.999H16.17L10.59 18.589L12 19.999L20 11.999L12 3.99902Z"
				fill="#28211E"
			/>
		</svg>
	);
};
