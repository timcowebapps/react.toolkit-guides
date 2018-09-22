'use strict';

import * as PropTypes from 'prop-types';

export namespace GistProps {
	export interface IProps {
		gist: string;
		file?: string;
	}

	export const types: PropTypes.ValidationMap<IProps> = {
		gist: PropTypes.string.isRequired,
		file: PropTypes.string
	}

	export const defaults: IProps = {
		gist: "",
		file: ""
	}
}
