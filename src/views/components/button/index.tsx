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
	Button
} from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { ButtonCompProps } from './index-props';
import { ButtonCompState } from './index-state';

import { Layout } from '../../layout';

var styles: any = require('./index.scss');
var headingStyles: any = require('../heading/variants.scss');
var linkStyles: any = require('../link/variants.scss');
var buttonStyles: any = require('../button/variants.scss');

export class ButtonComp extends React.Component<ButtonCompProps.IProps, ButtonCompState.IState> {
	//#region Статические переменные

	public static displayName: string = "ButtonComp";
	public static propTypes: PropTypes.ValidationMap<ButtonCompProps.IProps> = ButtonCompProps.types;
	public static defaultProps: ButtonCompProps.IProps = ButtonCompProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	//#region Приватные методы

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class ButtonComp
	 * @private
	 */
	private _getInitialState(): ButtonCompState.IState {
		return {
			// Empty
		}
	}

	private _handleClick(event: any) {
		// Empty
	}

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class ButtonComp
	 * @public
	 * @constructor
	 * @param {ButtonCompProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: ButtonCompProps.IProps) {
		super(props);

		this.state = this._getInitialState();
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class ButtonComp
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
							}}>Кнопка</Heading>

							<p>Смотри: <Link scheme={{
								properties: {
									htmlTag: HtmlTagTypes.A,
									to: "/react.toolkit-guides/icon",
									classes: { stylesheet: linkStyles, block: "link" }
								},
								items: [{
									type: ComponentTypes.Node,
									properties: { content: "Icon" }
								}]
							}} /></p>

							<div className={styles["component-preview"]}>
								<Button scheme={{
									properties: {
										htmlTag: HtmlTagTypes.Button,
										onClick: this._handleClick,
										classes: { stylesheet: buttonStyles, block: "btn", modifiers: ["primary"], extract: "block" }
									},
									items: [{
										type: ComponentTypes.Node,
										properties: {
											content: "Block"
										}
									}]
								}} />
							</div>

							<p><code>{"import { Button } from '@timcowebapps/react.toolkit'"}</code></p>

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
										<td><code>properties.htmlTag</code></td>
										<td>Number</td>
										<td>Html тег элемента. Допустимые значения <Link scheme={{
											properties: {
												htmlTag: HtmlTagTypes.A,
												to: "/react.toolkit-guides/",
												classes: { stylesheet: linkStyles, block: "link" }
											},
											items: [{
												type: ComponentTypes.Node,
												properties: { content: "HtmlTagTypes" }
											}]
										}} /> перечислителя: <code>HtmlTagTypes.Button</code> (по умолчанию), <code>HtmlTagTypes.A</code></td>
									</tr>
									<tr>
										<td><code>properties.onClick</code></td>
										<td>Function</td>
										<td>Обработчик клика по кнопке</td>
									</tr>
									<tr>
										<td><code>properties.value</code></td>
										<td>String</td>
										<td>Значение</td>
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
