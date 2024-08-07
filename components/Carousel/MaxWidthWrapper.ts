import styled from "styled-components";

export const MaxWidthWrapper = styled.div`
	max-width: 1200px;
	width: 100%;

	padding-left: var(--spacing-4);
	padding-right: var(--spacing-4);

	@media (min-width: 600px) {
		padding-left: var(--spacing-5);
		padding-right: var(--spacing-5);
	}

	@media (min-width: 900px) {
		padding-left: var(--spacing-7);
		padding-right: var(--spacing-7);
	}

	@media (min-width: 1200px) {
		padding-left: var(--spacing-12);
		padding-right: var(--spacing-12);
		margin: 0 auto;
	}
`;

export default MaxWidthWrapper;
