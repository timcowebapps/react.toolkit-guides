'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
	BEM, Classes,
	AlignTypes, TextAlign,
	HtmlTagTypes, ComponentTypes
} from '@timcowebapps/react.utils';
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
							}}>Хлебные крошки</Heading>

							<p>Смотри: <Link scheme={{
								properties: {
									htmlTag: HtmlTagTypes.A,
									to: "/react.toolkit-guides/link",
									classes: { stylesheet: linkStyles, block: "link" }
								},
								items: [{
									type: ComponentTypes.Node,
									properties: { content: "Link" }
								}]
							}} /></p>

							<div className={styles["component-preview"]}>
								<Breadcrumb scheme={{
									properties: {
										classes: {
											stylesheet: breadcrumbStyles,
											block: "breadcrumb"
										}
									},
									items: [{
										uniqueId: "0",
										type: ComponentTypes.Link,
										properties: {
											to: '/react.toolkit-guides/breadcrumb',
											classes: {
												stylesheet: linkStyles
											}
										},
										items: [{
											type: ComponentTypes.Node,
											properties: {
												content: 'Главная'
											}
										}]
									}, {
										uniqueId: "1",
										type: ComponentTypes.Node,
										properties: {
											content: 'Текущая'
										}
									}]
								}} />
							</div>

							<p><code>{"import { Breadcrumb } from '@timcowebapps/react.toolkit'"}</code></p>

							<Heading scheme={{
								properties: {
									htmlTag: HtmlTagTypes.H2,
									align: TextAlign.toStr(AlignTypes.Left),
									classes: { stylesheet: headingStyles, block: "heading", modifiers: ["underline"] }
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
