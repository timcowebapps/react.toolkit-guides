'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	HtmlTagTypes, ComponentTypes
} from '@timcowebapps/react.utils';
import {
	Group,
	Navbar,
	Menu
} from '@timcowebapps/react.toolkit';
import { LayoutProps } from './index-props';
import { LayoutState } from './index-state';

var styles: any = require('./index.scss');
var buttonStyles: any = require('../components/button/variants.scss');
var navbarStyles: any = require('../components/navbar/variants.scss');
var menuStyles: any = require('../components/menu/variants.scss');

export class Layout extends React.Component<LayoutProps.IProps, LayoutState.IState> {
	//#region Статические переменные

	public static displayName: string = "Layout";
	public static propTypes: PropTypes.ValidationMap<LayoutProps.IProps> = LayoutProps.types;
	public static defaultProps: LayoutProps.IProps = LayoutProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class Layout
	 * @public
	 * @constructor
	 * @param {LayoutProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: LayoutProps.IProps) {
		super(props);

		this.state = this._getInitialState();
		this._handleThemeUpdate = this._handleThemeUpdate.bind(this);
	}

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class Layout
	 * @private
	 */
	private _getInitialState(): LayoutState.IState {
		return {
			// Empty
		}
	}

	private _handleThemeUpdate(event: React.SyntheticEvent) {
		// let target = event.target as HTMLInputElement;
		// let root = document.documentElement;

		// switch (target.value) {
		// 	case "lght":
		// 		root.style.setProperty('--theme-lght', styles.lght);
		// 		break;
		// 	case "dark":
		// 		root.style.setProperty('--theme-dark', styles.dark);
		// 		break;
		// }
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class Layout
	 * @public
	 */
	public render(): JSX.Element {
		return (
			<div className={styles["grid-container"]}>
				<div className={styles["grid-item-header"]}>
					<Navbar scheme={{
						properties: {
							htmlTag: HtmlTagTypes.Header,
							classes: { stylesheet: navbarStyles, block: "navbar-header" }
						}
					}} />
				</div>
				<div className={styles["grid-item-aside"]}>
					<Navbar scheme={{
						properties: {
							htmlTag: HtmlTagTypes.Aside,
							classes: { stylesheet: navbarStyles, block: "navbar-aside" }
						}
					}}>
						<React.Fragment>
							<Menu scheme={{
								properties: {
									classes: { stylesheet: menuStyles, block: "navbar-menu" }
								},
								items: [{
									uniqueId: "0",
									properties: { content: <Link to="/react.toolkit-guides/">Home</Link> }
								}, {
									uniqueId: "1",
									properties: { content: <Link to="/react.toolkit-guides/heading">Heading</Link> }
								}, {
									uniqueId: "2",
									properties: { content: <Link to="/react.toolkit-guides/label">Label</Link> }
								}, {
									uniqueId: "3",
									properties: { content: <Link to="/react.toolkit-guides/panel">Panel</Link> }
								}, {
									uniqueId: "4",
									properties: { content: <Link to="/react.toolkit-guides/button">Button</Link> }
								}, {
									uniqueId: "5",
									properties: { content: <Link to="/react.toolkit-guides/field">Field</Link> }
								}, {
									uniqueId: "6",
									properties: { content: <Link to="/react.toolkit-guides/breadcrumb">Breadcrumb</Link> }
								}, {
									uniqueId: "7",
									properties: { content: <Link to="/react.toolkit-guides/tabset">TabSet</Link> }
								}]
							}} />

						</React.Fragment>
					</Navbar>
				</div>
				<div>{this.props.children}</div>
			</div>
		);
	}
};
