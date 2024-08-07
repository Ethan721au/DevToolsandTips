import styled from "styled-components";

export const H2 = styled.h2`
	--h2-font-size: 36px;
	--h2-line-height: 44px;
	--h2-type-margin: 24px;

	@media (max-width: 600px) {
		--h2-font-size: 30px;
		--h2-line-height: 36px;
		--h2-type-margin: 16px;
	}

	font-size: var(--h2-font-size);
	line-height: var(--h2-line-height);
	margin-bottom: var(--h2-type-margin);
`;
