'use strict';

import * as PropTypes from 'prop-types';
import { RouteComponentProps } from 'react-router';

export namespace TabSetCompProps {
	export interface IProps extends RouteComponentProps<any> {
		// Empty
	}

	export const types: PropTypes.ValidationMap<IProps> = {
		// Empty
	}

	export const defaults: IProps = {
		//#region RouteComponentProps
		history: null,
		location: null,
		match: null
		//#endregion
	}
}
