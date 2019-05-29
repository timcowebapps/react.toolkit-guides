'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CN, AlignTypes, AlignTransform, HtmlTagTypes } from '@timcowebapps/react.utils';
import { Methodology } from '@timcowebapps/react.style';
import { Data } from '@timcowebapps/react.componentmodel';
import { Heading, Hyperlink, Button } from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { RouteConstants } from '../../../shared/routeconstants';
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
										content: "Кнопка"
									}
								}]
							}} />

							<p>Используется для создания различных типов кнопок.</p>

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
										content: "Icon"
									}
								}]
							}} /></p>

							<div className={styles["component-preview"]}>
								<Button {...{
									requirements: {
										htmlTag: HtmlTagTypes.Button,
										onClick: this._handleClick,
										viewStyle: { stylesheet: buttonStyles, bem: { block: "btn", modifiers: ["primary"] }, extracts: "block" }
									},
									items: [{
										type: Data.Schema.ComponentTypes.Node,
										requirements: {
											content: "Block"
										}
									}]
								}} />
							</div>

							<p><code>{"import { Button } from '@timcowebapps/react.toolkit'"}</code></p>

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
										<td><code>requirements.htmlTag</code></td>
										<td>Number</td>
										<td>Html тег элемента. Допустимые значения <Hyperlink {...{
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
														content: "HtmlTagTypes"
													}
												}]
											}} /> перечислителя: <code>HtmlTagTypes.Button</code> (по умолчанию), <code>HtmlTagTypes.A</code></td>
									</tr>
									<tr>
										<td><code>requirements.onClick</code></td>
										<td>Function</td>
										<td>Обработчик клика по кнопке</td>
									</tr>
									<tr>
										<td><code>requirements.value</code></td>
										<td>String</td>
										<td>Значение</td>
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
