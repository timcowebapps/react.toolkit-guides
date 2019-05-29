'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CN, AlignTypes, AlignTransform, HtmlTagTypes } from '@timcowebapps/react.utils';
import { Methodology } from '@timcowebapps/react.style';
import { Data } from '@timcowebapps/react.componentmodel';
import { Heading, Hyperlink, TabSet, TabSetItem } from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { RouteConstants } from '../../../shared/routeconstants';
import { TabSetCompProps } from './index-props';
import { TabSetCompState } from './index-state';

import { Layout } from '../../layout';

var styles: any = require('./index.scss');
var headingStyles: any = require('./../heading/variants.scss');
var buttonStyles: any = require('../button/variants.scss');
var linkStyles: any = require('../link/variants.scss');
var tabsetStyles: any = require('./variants.scss');

export class TabSetComp extends React.Component<TabSetCompProps.IProps, TabSetCompState.IState> {
	//#region Статические переменные

	public static displayName: string = "TabSetComp";
	public static propTypes: PropTypes.ValidationMap<TabSetCompProps.IProps> = TabSetCompProps.types;
	public static defaultProps: TabSetCompProps.IProps = TabSetCompProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	//#region Приватные методы

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class TabSetComp
	 * @private
	 */
	private _getInitialState(): TabSetCompState.IState {
		return {
			// Empty
		}
	}

	private _handleTabChange(data: TabSetItem): void {
		// Empty
	}

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class TabSetComp
	 * @public
	 * @constructor
	 * @param {TabSetCompProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: TabSetCompProps.IProps) {
		super(props);

		this.state = this._getInitialState();
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class TabSetComp
	 * @public
	 */
	public render(): JSX.Element {
		return (
			<Layout>
				<div className={styles["container-fluid"]}>
					<div className={CN.many(
						styles["row"],
						Methodology.Bem.Entities.block(styles, "spacing-above").element().modifiers(["sm"]),
						Methodology.Bem.Entities.block(styles, "spacing-below").element().modifiers(["sm"])
					)}>
						<div className={Methodology.Bem.Entities.block(styles, "col").element().modifiers(["xs-12", "sm-12", "md-12", "lg-12"])}>
							<Heading {...{
								requirements: {
									htmlTag: HtmlTagTypes.H1,
									align: AlignTransform.toStr(AlignTypes.Left),
									viewStyle: { stylesheet: headingStyles, bem: { block: "heading" } }
								},
								items: [{
									type: Data.Schema.ComponentTypes.Node,
									requirements: {
										content: "Вкладки"
									}
								}]
							}} />

							<p>Вкладка - это скрытый раздел контента, активируемый меню</p>
							<p>Смотри: <Hyperlink {...{
								requirements: {
									to: RouteConstants.Home,
									onClick: (e: React.MouseEvent<HTMLElement>, href: string) => {
										e.preventDefault();
										this.props.history.replace(href);
									},
									viewStyle: { stylesheet: linkStyles, bem: { block: "link" } },
								},
								items: [{
									type: Data.Schema.ComponentTypes.Node,
									requirements: {
										content: "Menu"
									}
								}]
							}} />, <Hyperlink {...{
								requirements: {
									to: RouteConstants.Panel,
									onClick: (e: React.MouseEvent<HTMLElement>, href: string) => {
										e.preventDefault();
										this.props.history.replace(href);
									},
									viewStyle: { stylesheet: linkStyles, bem: { block: "link" } },
								},
								items: [{
									type: Data.Schema.ComponentTypes.Node,
									requirements: {
										content: "Panel"
									}
								}]
							}} /></p>

							<div className={styles["component-preview"]}>
								<TabSet {...{
									defaults: { currentItemIdx: 0 },
									requirements: {
										dynamically: false,
										viewStyle: { stylesheet: tabsetStyles, bem: { block: "tabset" } },
										onTabChange: this._handleTabChange
									},
									items: [{
										uid: "0",
										requirements: { title: "Вкладка 1", content: "Содержимое вкладки 1" }
									}, {
										uid: "1",
										requirements: { title: "Вкладка 2", content: "Содержимое вкладки 2" }
									}, {
										uid: "2",
										requirements: { title: "Вкладка 3", content: "Содержимое вкладки 3" }
									}, {
										uid: "3",
										requirements: { title: "Вкладка 4", content: "Содержимое вкладки 4" }
									}]
								}} />
							</div>

							<p><code>{"import { TabSet } from '@timcowebapps/react.toolkit'"}</code></p>

							<Heading {...{
								requirements: {
									htmlTag: HtmlTagTypes.H2,
									align: AlignTransform.toStr(AlignTypes.Left),
									viewStyle: { stylesheet: headingStyles, bem: { block: "heading" } }
								},
								items: [{
									type: Data.Schema.ComponentTypes.Node,
									requirements: {
										content: "Схема компонента"
									}
								}]
							}} />

							<table>
								<thead>
									<tr>
										<th>Свойство</th>
										<th>Тип</th>
										<th>Описание</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><code>uid</code></td>
										<td>String</td>
										<td>Уникальный идентификатор компонента</td>
									</tr>
									<tr>
										<td><code>requirements.dynamically</code></td>
										<td>Boolean</td>
										<td>Вкладка может отображать только активную панель</td>
									</tr>
									<tr>
										<td><code>requirements.onTabChange</code></td>
										<td>Function</td>
										<td>Обработчик клика по пункту меню</td>
									</tr>
									<tr>
										<td><code>requirements.viewStyle.stylesheet</code></td>
										<td>Object</td>
										<td>Карта каскадных стилей</td>
									</tr>
									<tr>
										<td><code>requirements.viewStyle.bem.block</code></td>
										<td>String</td>
										<td>Имя блока</td>
									</tr>
									<tr>
										<td><code>requirements.viewStyle.bem.modifiers</code></td>
										<td>Array&#x0003C;String&#x0003E;</td>
										<td>Имена модификаторов</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
};
