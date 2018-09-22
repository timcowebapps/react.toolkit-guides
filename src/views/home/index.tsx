'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HomePageProps } from './index-props';
import { HomePageState } from './index-state';

import { Layout } from '../layout';

export class HomePage extends React.Component<HomePageProps.IProps, HomePageState.IState> {
	//#region Статические переменные

	public static displayName: string = "Home";
	public static propTypes: PropTypes.ValidationMap<HomePageProps.IProps> = HomePageProps.types;
	public static defaultProps: HomePageProps.IProps = HomePageProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class HomePage
	 * @public
	 * @constructor
	 * @param {HomePageProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: HomePageProps.IProps) {
		super(props);

		this.state = this._getInitialState();
	}

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class HomePage
	 * @private
	 */
	private _getInitialState(): HomePageState.IState {
		return {
			// Empty
		}
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class HomePage
	 * @public
	 */
	public render(): JSX.Element {
		return (
			<Layout>
				<h3>Overview</h3>
			</Layout>
		);
	}
};
