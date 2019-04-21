'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HtmlTagTypes } from '@timcowebapps/react.utils';
import { Data } from '@timcowebapps/react.componentmodel';
import { Navbar, TreeView } from '@timcowebapps/react.toolkit';
import { LayoutProps } from './index-props';
import { LayoutState } from './index-state';

var styles: any = require('./index.scss');
var buttonStyles: any = require('../components/button/variants.scss');
var navbarStyles: any = require('../components/navbar/variants.scss');
var menuStyles: any = require('../components/menu/variants.scss');
var treeviewStyles: any = require('../components/treeview/variants.scss');

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
					<Navbar requirements={{
						htmlTag: HtmlTagTypes.Header,
						viewStyle: { stylesheet: navbarStyles, bem: { block: "navbar-header" } }
					}} />
				</div>
				<div className={styles["grid-item-aside"]}>
					<Navbar requirements={{
						htmlTag: HtmlTagTypes.Aside,
						viewStyle: { stylesheet: navbarStyles, bem: { block: "navbar-aside" } }
					}}>
						<React.Fragment>
							<TreeView {...{
								requirements: {
									viewStyle: { stylesheet: treeviewStyles, bem: { block: "treeview" } }
								},
								items: [{
									type: Data.Schema.ComponentTypes.Group,
									items: [{
										type: Data.Schema.ComponentTypes.Item,
										items: {
											type: Data.Schema.ComponentTypes.Node,
											requirements: { content: <Link to="/react.toolkit-guides/">Home</Link> }
										}
									}, {
										type: Data.Schema.ComponentTypes.Item,
										items: [{
											type: Data.Schema.ComponentTypes.Node,
											requirements: { content: "Heading" }
										}, {
											type: Data.Schema.ComponentTypes.Group,
											items: [{
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: <Link to="/react.toolkit-guides/heading">Overview</Link> }
												}
											}, {
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: "Getting Started" }
												}
											}]
										}]
									}, {
										type: Data.Schema.ComponentTypes.Item,
										items: [{
											type: Data.Schema.ComponentTypes.Node,
											requirements: { content: "Label" }
										}, {
											type: Data.Schema.ComponentTypes.Group,
											items: [{
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: <Link to="/react.toolkit-guides/label">Overview</Link> }
												}
											}, {
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: "Getting Started" }
												}
											}]
										}]
									}, {
										type: Data.Schema.ComponentTypes.Item,
										items: [{
											type: Data.Schema.ComponentTypes.Node,
											requirements: { content: "Panel" }
										}, {
											type: Data.Schema.ComponentTypes.Group,
											items: [{
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: <Link to="/react.toolkit-guides/panel">Overview</Link> }
												}
											}, {
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: "Getting Started" }
												}
											}]
										}]
									}, {
										type: Data.Schema.ComponentTypes.Item,
										items: [{
											type: Data.Schema.ComponentTypes.Node,
											requirements: { content: "Button" }
										}, {
											type: Data.Schema.ComponentTypes.Group,
											items: [{
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: <Link to="/react.toolkit-guides/button">Overview</Link> }
												}
											}, {
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: "Getting Started" }
												}
											}]
										}]
									}, {
										type: Data.Schema.ComponentTypes.Item,
										items: [{
											type: Data.Schema.ComponentTypes.Node,
											requirements: { content: "FormGroup" }
										}, {
											type: Data.Schema.ComponentTypes.Group,
											items: [{
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: <Link to="/react.toolkit-guides/form-group">Overview</Link> }
												}
											}, {
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: "Getting Started" }
												}
											}]
										}]
									}, {
										type: Data.Schema.ComponentTypes.Item,
										items: [{
											type: Data.Schema.ComponentTypes.Node,
											requirements: { content: "Breadcrumb" }
										}, {
											type: Data.Schema.ComponentTypes.Group,
											items: [{
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: <Link to="/react.toolkit-guides/breadcrumb">Overview</Link> }
												}
											}, {
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: "Getting Started" }
												}
											}]
										}]
									}, {
										type: Data.Schema.ComponentTypes.Item,
										items: [{
											type: Data.Schema.ComponentTypes.Node,
											requirements: { content: "TabSet" }
										}, {
											type: Data.Schema.ComponentTypes.Group,
											items: [{
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: <Link to="/react.toolkit-guides/tabset">Overview</Link> }
												}
											}, {
												type: Data.Schema.ComponentTypes.Item,
												items: {
													type: Data.Schema.ComponentTypes.Node,
													requirements: { content: "Getting Started" }
												}
											}]
										}]
									}]
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
