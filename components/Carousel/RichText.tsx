import {
	render,
	NODE_HEADING,
	NODE_PARAGRAPH,
	StoryblokRichtext,
	MARK_HIGHLIGHT
} from "storyblok-rich-text-react-renderer";
import { H1, H2, H3, H4, H5, H6, P } from "../../components/Typography";

export const RichText = ({ document }: { document: StoryblokRichtext }) => {
	const rendered = render(document, {
		nodeResolvers: {
			[NODE_HEADING]: (children, { level }) => {
				switch (level) {
					case 1:
						return <H1>{children}</H1>;
					case 2:
						return <H2>{children}</H2>;
					case 3:
						return <H3>{children}</H3>;
					case 4:
						return <H4>{children}</H4>;
					case 5:
						return <H5>{children}</H5>;
					case 6:
						return <H6>{children}</H6>;
					default:
						return <H1>{children}</H1>;
				}
			},
			[NODE_PARAGRAPH]: (children) => <P>{children}</P>
		},
		markResolvers: {
			[MARK_HIGHLIGHT]: (children, { color }) => (
				<span style={{ position: "relative" }}>
					<svg
						style={{ position: "absolute", color, width: "100%", height: "100%", transform: "scale(1.1)" }}
						width="347"
						height="95"
						viewBox="0 0 347 95"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M244.215 2C162.594 2.87851 -15.6406 13.4598 3.41548 67.3207C20.5414 105.348 264.578 97.1786 324.79 68.5643C385.002 39.95 302.309 10.1755 187.047 20.7176"
							stroke="currentColor"
							strokeWidth="4"
						/>
					</svg>

					{children}
				</span>
			)
		}
	});

	return <div>{rendered}</div>;
};

export const hasRichText = (document?: StoryblokRichtext): boolean => !!render(document);
