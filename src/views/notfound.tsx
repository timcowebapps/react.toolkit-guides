'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppProps } from '../app-props';
import { AppState } from '../app-state';

export class NotFound extends React.Component<AppProps.IProps, AppState.IState> {
	//#region Статические переменные

	public static displayName: string = "NotFound";
	public static propTypes: PropTypes.ValidationMap<any> = AppProps.types;
	public static defaultProps: AppProps.IProps = AppProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class NotFound
	 * @public
	 * @constructor
	 * @param {AppProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: AppProps.IProps) {
		super(props);

		this.state = this._getInitialState();
	}

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class NotFound
	 * @private
	 */
	private _getInitialState(): AppState.IState {
		return {
			// Empty
		}
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class NotFound
	 * @public
	 */
	public render(): JSX.Element {
		return (
			<React.Fragment>
				<h3>NotFound</h3>
				<Link to="/">Home</Link>
				<br />
				<Link to="/example">Example</Link>
			</React.Fragment>
		);
	}
};
