import styled from "styled-components";

export const H3 = styled.h3`
	--h3-font-size: 30px;
	--h3-line-height: 38px;
	--h3-type-margin: 16px;

	@media (max-width: 600px) {
		--h3-font-size: 24px;
		--h3-line-height: 30px;
		--h3-type-margin: 12px;
	}

	font-size: var(--h3-font-size);
	line-height: var(--h3-line-height);
	margin-bottom: var(--h3-type-margin);
`;
