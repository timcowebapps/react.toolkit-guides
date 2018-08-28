'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { AppProps } from './app-props';
import { AppState } from './app-state';

import { Home } from './views/home';
import { Example } from './views/example';
import { NotFound } from './views/notfound';

export class App extends React.Component<AppProps.IProps, AppState.IState> {
	//#region Статические переменные

	public static displayName: string = "App";
	public static propTypes: PropTypes.ValidationMap<any> = AppProps.types;
	public static defaultProps: AppProps.IProps = AppProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class App
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
	 * @class App
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
	 * @class App
	 * @public
	 */
	public render(): JSX.Element {
		return (
			<Switch>
				<Route exact path="/react.toolkit-guides/" component={Home} />
				<Route path="/react.toolkit-guides/example" component={Example} />
				<Route component={NotFound} />
			</Switch>
		);
	}
};
