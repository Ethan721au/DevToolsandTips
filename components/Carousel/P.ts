import styled from "styled-components";

interface ParagraphProps {
	small?: boolean;
}

export const P = styled.p<ParagraphProps>`
	--p-font-size: ${(p) => (p.small ? "14px" : "16px")};
	--p-line-height: ${(p) => (p.small ? "20px" : "24px")};
	--p-type-margin: ${(p) => (p.small ? "8px" : "16px")};

	@media (max-width: 600px) {
		--p-font-size: 14px;
		--p-line-height: 22px;
		--p-type-margin: 8px;
	}

	font-size: var(--p-font-size);
	line-height: var(--p-line-height);
	margin-bottom: var(--p-type-margin);

	a {
		color: var(--dark-text);
	}
`;
