'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	BEM, Classes,
	AlignTypes, TextAlign,
	HtmlTagTypes,
	Guid
} from '@timcowebapps/react.utils';
import {
	Heading,
	TabSet, TabSetItem
} from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { TabSetCompProps } from './index-props';
import { TabSetCompState } from './index-state';

import { Layout } from '../../layout';

var styles: any = require('./index.scss');
var headingStyles: any = require('./../heading/variants.scss');
var buttonStyles: any = require('../button/variants.scss');
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
					<div className={Classes.many(
						styles["row"],
						BEM.block(styles, "spacing-above").element().modifiers(["sm"]),
						BEM.block(styles, "spacing-below").element().modifiers(["sm"])
					)}>
						<div className={BEM.block(styles, "col").element().modifiers(["xs-12", "sm-12", "md-12", "lg-12"])}>
							<Heading scheme={{
								properties: {
									htmlTag: HtmlTagTypes.H1,
									align: TextAlign.toStr(AlignTypes.Left),
									classes: { stylesheet: headingStyles, block: "heading" }
								}
							}}>Вкладки</Heading>

							<p>Вкладка - это скрытый раздел контента, активируемый меню</p>
							<p>Смотри: <Link className={buttonStyles["hyperlink"]} to="/react.toolkit-guides/">Menu</Link>, <Link className={buttonStyles["hyperlink"]} to="/react.toolkit-guides/panel">Panel</Link></p>

							<div className={styles["component-preview"]}>
								<TabSet scheme={{
									defaults: { currentItemIdx: 0 },
									properties: {
										dynamically: false,
										classes: { stylesheet: tabsetStyles, block: "tabset" },
										onTabChange: this._handleTabChange
									},
									items: [{
										uniqueId: "0",
										properties: { title: "Вкладка 1", content: "Содержимое вкладки 1" }
									}, {
										uniqueId: "1",
										properties: { title: "Вкладка 2", content: "Содержимое вкладки 2" }
									}, {
										uniqueId: "2",
										properties: { title: "Вкладка 3", content: "Содержимое вкладки 3" }
									}, {
										uniqueId: "3",
										properties: { title: "Вкладка 4", content: "Содержимое вкладки 4" }
									}]
								}} />
							</div>

							<p><code>{"import { TabSet } from '@timcowebapps/react.toolkit'"}</code></p>

							<Heading scheme={{
								properties: {
									htmlTag: HtmlTagTypes.H2,
									align: TextAlign.toStr(AlignTypes.Left),
									classes: { stylesheet: headingStyles, block: "heading" }
								}
							}}>Схема компонента</Heading>

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
										<td><code>uniqueId</code></td>
										<td>String</td>
										<td>Уникальный идентификатор компонента</td>
									</tr>
									<tr>
										<td><code>properties.dynamically</code></td>
										<td>Boolean</td>
										<td>Вкладка может отображать только активную панель</td>
									</tr>
									<tr>
										<td><code>properties.onTabChange</code></td>
										<td>Function</td>
										<td>Обработчик клика по пункту меню</td>
									</tr>
									<tr>
										<td><code>properties.classes.stylesheet</code></td>
										<td>Object</td>
										<td>Карта каскадных стилей</td>
									</tr>
									<tr>
										<td><code>properties.classes.block</code></td>
										<td>String</td>
										<td>Имя блока</td>
									</tr>
									<tr>
										<td><code>properties.classes.modifiers</code></td>
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
