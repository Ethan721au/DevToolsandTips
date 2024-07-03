import React, { ReactNode, useEffect, useRef, useState } from "react";
import styled, { keyframes, Keyframes } from "styled-components";

type InfinateScrollProps = {
	speed: keyof SpeedConfig;
	itemPadding: number;
	children: ReactNode;
	active: boolean;
	direction: "normal" | "reverse";
	orientation: "horizontal" | "vertical";
};

type SpeedConfig = {
	slow: number;
	normal: number;
	fast: number;
};

type Bounds = {
	width: number;
	height: number;
};

const speed: SpeedConfig = { slow: 10, normal: 40, fast: 160 };

const rightToLeft = keyframes`
0%{
  transform: translate3d(0%, 0,0);
}

100%{
  transform: translate3d(var(--horizontalAnimationTranslate),0,0);
}`;

const leftToRight = keyframes`
	0%{
  transform: translate3d(var(--bannerTranslateHorizontal), 0,0);
}

100%{
  transform: translate3d(calc(var(--bannerTranslateHorizontal) - var(--horizontalAnimationTranslate)),0,0);
}
`;

const bottomToTop = keyframes`
0%{
  transform: translate3d(0%, 0, 0);
}

100%{
  transform: translate3d(0%, var(--bannerTranslateVertical), 0);
}`;

const topToBottom = keyframes`
0%{
  transform: translate3d(0%, var(--bannerTranslateVertical), 0);
}

100%{
  transform: translate3d(0%, var(--bannerTranslateVertical) + var(--bannerTranslateVertical), 0);
}`;

type AnimationMap = {
	normal: Orientation;
	reverse: Orientation;
};

type Orientation = {
	horizontal: Keyframes;
	vertical: Keyframes;
};

const animationMap: AnimationMap = {
	normal: {
		horizontal: leftToRight,
		vertical: bottomToTop
	},
	reverse: {
		horizontal: rightToLeft,
		vertical: topToBottom
	}
};

const MarqueeWrapper = styled.div`
	min-height: 50px;
	overflow: hidden;
	align-content: center;
`;

const MarqueeBanner = styled.div<{
	$marqueeSpeed: keyof SpeedConfig;
	$marqueeItemBounds: Bounds;
	$multiplicator: number;
	$viewBounds: Bounds;
	$direction: "normal" | "reverse";
	$orientation: "horizontal" | "vertical";
	$active: boolean;
	$marqueeWrapperBounds: Bounds;
}>`
	--horizontalAnimationTranslate: ${(p) => {
		return `${p.$marqueeItemBounds.width * p.$multiplicator * -1}px`;
	}};
	--marqueeSpeed: ${(p) => `${(p.$marqueeItemBounds.width * p.$multiplicator) / speed[p.$marqueeSpeed]}s`};
	--bannerTranslateHorizontal: ${(p) => {
		return `-${p.$marqueeItemBounds.width * p.$multiplicator * 2 - p.$viewBounds.width}px`;
	}};
	--bannerTranslateVertical: ${(p) => {
		return `-${p.$marqueeWrapperBounds.height / 2}px`;
	}};
	display: flex;
	flex-direction: ${(p) => (p.$orientation === "horizontal" ? "row" : "column")};
	align-items: center;
	transform: ${(p) => {
		const { $direction, $orientation } = p;
		return $direction === "reverse" && $orientation === "horizontal"
			? `translate3d(var(--bannerTranslateHorizontal), 0, 0)`
			: $direction === "reverse" && $orientation === "vertical"
			? `translateY(var(--bannerTranslateVertical))`
			: "";
	}};
	animation: ${(p) => {
			const { $direction, $orientation } = p;
			return animationMap[$direction][$orientation];
		}}
		${(p) => {
			return p.$active && p.$orientation === "horizontal"
				? `${(p.$marqueeItemBounds.width * p.$multiplicator) / speed[p.$marqueeSpeed]}s`
				: p.$active && p.$orientation === "vertical"
				? `${(p.$marqueeItemBounds.height * p.$multiplicator) / speed[p.$marqueeSpeed]}s`
				: "";
		}}
		linear infinite;
`;

const MarqueeItemContainer = styled.div`
	display: flex;
`;

const MarqueeItem = styled.div<{
	$itemPadding: string;
}>`
	display: flex;
	white-space: nowrap;
	justify-content: center;
	align-items: center;
	padding: ${(p) => p.$itemPadding};
`;

export const InfiniteScroll = ({
	children,
	speed,
	itemPadding,
	direction,
	orientation,
	active
}: InfinateScrollProps) => {
	const [viewBounds, setViewBounds] = useState<Bounds>({
		width: 1,
		height: 1
	});
	const [multiplicator, setMultiplicator] = useState(1);
	const marqueeItemContainerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const marqueeWrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const [marqueeItemBounds, setMarqueeItemBounds] = useState<Bounds>({
		width: 0,
		height: 0
	});
	const [marqueeWrapperBounds, setMarqueeWrapperBounds] = useState<Bounds>({
		width: 0,
		height: 0
	});

	const updateViewBounds = () => {
		setViewBounds({ width: window?.innerWidth, height: window?.innerHeight });
	};

	useEffect(() => {
		updateViewBounds();
	}, []);

	useEffect(() => {
		window.addEventListener("resize", updateViewBounds);
		if (marqueeItemContainerRef.current && marqueeWrapperRef.current && children) {
			setMarqueeItemBounds({
				width: marqueeItemContainerRef.current.clientWidth,
				height: marqueeItemContainerRef.current.clientHeight
			});
			setMarqueeWrapperBounds({
				width: marqueeWrapperRef.current.clientWidth,
				height: marqueeWrapperRef.current.clientHeight
			});
			setMultiplicator(() => {
				if (orientation === "horizontal") {
					return Math.ceil(viewBounds.width / marqueeItemContainerRef.current.clientWidth);
				} else {
					return 30;
				}
			});
		}
		return () => {
			window.removeEventListener("resize", updateViewBounds);
		};
	}, [viewBounds, children, orientation]);

	// items passed into the component as children get wrapped in a MarqueeItem div
	const marqueeItems =
		Array.isArray(children) &&
		children.map((child: JSX.Element, childIdx: number) => (
			<MarqueeItem key={childIdx} $itemPadding={`${itemPadding}px`}>
				{child}
			</MarqueeItem>
		));

	// multiply the items to fill the available space
	const finalMarquee = Array.from({ length: multiplicator * 2 }, (_, i) => (
		<MarqueeItemContainer ref={marqueeItemContainerRef} key={i}>
			{marqueeItems}
		</MarqueeItemContainer>
	));

	return (
		<MarqueeWrapper ref={marqueeWrapperRef}>
			<MarqueeBanner
				$marqueeSpeed={speed}
				$marqueeItemBounds={marqueeItemBounds}
				$multiplicator={multiplicator}
				$viewBounds={viewBounds}
				$direction={direction}
				$orientation={orientation}
				$active={active}
				$marqueeWrapperBounds={marqueeWrapperBounds}
			>
				{finalMarquee}
			</MarqueeBanner>
		</MarqueeWrapper>
	);
};

