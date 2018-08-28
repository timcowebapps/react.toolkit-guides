'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { AppProps } from '../app-props';
import { AppState } from '../app-state';

export class Example extends React.Component<AppProps.IProps, AppState.IState> {
	//#region Статические переменные

	public static displayName: string = "Example";
	public static propTypes: PropTypes.ValidationMap<any> = AppProps.types;
	public static defaultProps: AppProps.IProps = AppProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class Example
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
	 * @class Example
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
	 * @class Example
	 * @public
	 */
	public render(): JSX.Element {
		return (
			<div>Example</div>
		);
	}
};
