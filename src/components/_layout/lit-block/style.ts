import { css } from 'lit';

import alignBoth from './styles/align.both.ts';
import alignContent from './styles/align.content.ts';
import alignItems from './styles/align.items.ts';

import variantColumn from './styles/variant.column.ts';
import variantGrid from './styles/variant.grid.ts';
import variantMain from './styles/variant.main.ts';
import variantRow from './styles/variant.row.ts';
import variantSection from './styles/variant.section.ts';

export default [
	css`
		:host {
			max-width: 100%;
			width: 100%;
		}
	`,
	alignBoth,
	alignContent,
	alignItems,
	variantColumn,
	variantGrid,
	variantMain,
	variantRow,
	variantSection,
];
