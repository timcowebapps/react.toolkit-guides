'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NotFoundPageProps } from './index-props';
import { NotFoundPageState } from './index-state';

var buttonStyles: any = require('../components/button/variants.scss');

export class NotFoundPage extends React.Component<NotFoundPageProps.IProps, NotFoundPageState.IState> {
	//#region Статические переменные

	public static displayName: string = "NotFound";
	public static propTypes: PropTypes.ValidationMap<NotFoundPageProps.IProps> = NotFoundPageProps.types;
	public static defaultProps: NotFoundPageProps.IProps = NotFoundPageProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class NotFoundPage
	 * @public
	 * @constructor
	 * @param {NotFoundPageProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: NotFoundPageProps.IProps) {
		super(props);

		this.state = this._getInitialState();
	}

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class NotFoundPage
	 * @private
	 */
	private _getInitialState(): NotFoundPageState.IState {
		return {
			// Empty
		}
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class NotFoundPage
	 * @public
	 */
	public render(): JSX.Element {
		return (
			<React.Fragment>
				<h3>NotFoundPage</h3>
				<Link to="/react.toolkit-guides/">Home</Link>
			</React.Fragment>
		);
	}
};
