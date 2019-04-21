'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
	CN,
	AlignTypes, TextAlign,
	HtmlTagTypes
} from '@timcowebapps/react.utils';
import { Methodology } from '@timcowebapps/react.style';
import { Data } from '@timcowebapps/react.componentmodel';
import {
	Heading,
	Link,
	Breadcrumb
} from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { BreadcrumbCompProps } from './index-props';
import { BreadcrumbCompState } from './index-state';

import { Layout } from '../../layout';

var styles: any = require('./index.scss');
var headingStyles: any = require('../heading/variants.scss');
var linkStyles: any = require('../link/variants.scss');
var buttonStyles: any = require('../button/variants.scss');
var breadcrumbStyles: any = require('./variants.scss');

export class BreadcrumbComp extends React.Component<BreadcrumbCompProps.IProps, BreadcrumbCompState.IState> {
	//#region Статические переменные

	public static displayName: string = "BreadcrumbComp";
	public static propTypes: PropTypes.ValidationMap<BreadcrumbCompProps.IProps> = BreadcrumbCompProps.types;
	public static defaultProps: BreadcrumbCompProps.IProps = BreadcrumbCompProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	//#region Приватные методы

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class BreadcrumbComp
	 * @private
	 */
	private _getInitialState(): BreadcrumbCompState.IState {
		return {
			// Empty
		}
	}

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class BreadcrumbComp
	 * @public
	 * @constructor
	 * @param {BreadcrumbCompProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: BreadcrumbCompProps.IProps) {
		super(props);

		this.state = this._getInitialState();
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class BreadcrumbComp
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
									align: TextAlign.toStr(AlignTypes.Left),
									viewStyle: { stylesheet: headingStyles, bem: { block: "heading" } }
								},
								items: [{
									type: Data.Schema.ComponentTypes.Node,
									requirements: {
										content: "Хлебные крошки"
									}
								}]
							}} />

							<p>Смотри: <Link {...{
								requirements: {
									htmlTag: HtmlTagTypes.A,
									to: "/react.toolkit-guides/link",
									viewStyle: { stylesheet: linkStyles, bem: { block: "link" } }
								},
								items: [{
									type: Data.Schema.ComponentTypes.Node,
									requirements: { content: "Link" }
								}]
							}} /></p>

							<div className={styles["component-preview"]}>
								<Breadcrumb {...{
									requirements: {
										viewStyle: { stylesheet: breadcrumbStyles, bem: { block: "breadcrumb" } }
									},
									items: [{
										uid: "0",
										type: Data.Schema.ComponentTypes.Link,
										requirements: {
											to: '/react.toolkit-guides/breadcrumb',
											viewStyle: { stylesheet: linkStyles }
										},
										items: [{
											type: Data.Schema.ComponentTypes.Node,
											requirements: {
												content: 'Главная'
											}
										}]
									}, {
										uid: "1",
										type: Data.Schema.ComponentTypes.Node,
										requirements: {
											content: 'Текущая'
										}
									}]
								}} />
							</div>

							<p><code>{"import { Breadcrumb } from '@timcowebapps/react.toolkit'"}</code></p>

							<Heading {...{
								requirements: {
									htmlTag: HtmlTagTypes.H2,
									align: TextAlign.toStr(AlignTypes.Left),
									viewStyle: { stylesheet: headingStyles, bem: { block: "heading", modifiers: ["underline"] } }
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
