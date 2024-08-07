import { apiPlugin, SbBlokData, storyblokInit } from "@storyblok/react";
import { StoryblokRichtext } from "storyblok-rich-text-react-renderer";
import {
	Banner,
	Button,
	ButtonBlokType,
	CarouselSection,
	ContentHeader,
	DefaultFooter,
	DefaultNavbar,
	FeatureComparisonGroup,
	FeatureComparisonItem,
	FeatureComparisonSection,
	FeatureHighlightItem,
	FeatureHighlightsSection,
	FeatureSingle,
	H1,
	Headline,
	Logos,
	Page,
	PricingCard,
	PricingCardInclusion,
	PricingSection,
	ReviewCard,
	Statistic,
	StatisticBlokType,
	StatisticsSection,
	TwoColumnHeader
} from "./components/CMS";

const registeredComponents = {
	banner: Banner,
	button: Button,
	contentHeader: ContentHeader,
	defaultNav: DefaultNavbar,
	defaultFooter: DefaultFooter,
	h1: H1,
	page: Page,
	twoColumnHeader: TwoColumnHeader,
	logos: Logos,
	headline: Headline,
	featureSingle: FeatureSingle,
	stats: StatisticsSection,
	statistic: Statistic,
	pricing: PricingSection,
	pricingCard: PricingCard,
	pricingCardInclusion: PricingCardInclusion,
	featureComparison: FeatureComparisonSection,
	featureComparisonGroup: FeatureComparisonGroup,
	featureComparisonItem: FeatureComparisonItem,
	featureHighlight: FeatureHighlightsSection,
	featureHighlightItem: FeatureHighlightItem,
	carousel: CarouselSection,
	reviewCard: ReviewCard
};

export const initialize = () => {
	return storyblokInit({
		accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN!,
		use: [apiPlugin],
		components: registeredComponents,
		apiOptions: {
			region: "ap"
		}
	});
};

export const sampleRichTextHeading = {
	type: "doc",
	content: [
		{
			type: "heading",
			attrs: {
				level: 1
			},
			content: [
				{
					text: "I love Humanitix",
					type: "text"
				}
			]
		}
	]
} as StoryblokRichtext;

export const generateSampleRichTextParagraph = (text: string): StoryblokRichtext => {
	return {
		type: "doc",
		content: [
			{
				type: "paragraph",
				content: [
					{
						text,
						type: "text"
					}
				]
			}
		]
	};
};

export const sampleStatistic = {
	_uid: "5046a9a3-e21c-4283-90de-558dc9d4722b",
	title: "$0",
	subtitle: "subscription cost",
	component: "statistic",
	description: generateSampleRichTextParagraph("I love Humanitix")
} as unknown as StatisticBlokType;

export const generateSampleButton = (label: string): ButtonBlokType => {
	return {
		_uid: "95dc1be6-1d68-44cc-bbef-4b2cda47ab78",
		link: {
			id: "",
			url: "",
			linktype: "story",
			fieldtype: "multilink",
			cached_url: ""
		},
		label,
		component: "button"
	};
};

export type AssetType = SbBlokData & {
	filename: string;
	alt?: string;
};

export type LinkType = SbBlokData & {
	id: string;
	url: string;
	linktype: "story" | "url";
	fieldtype: string;
	cached_url: string;
	target?: "_blank";
};
