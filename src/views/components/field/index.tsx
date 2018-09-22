'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	BEM, Classes,
	AlignTypes, TextAlign,
	HtmlTagTypes, ComponentTypes, HtmlFieldTypes
} from '@timcowebapps/react.utils';
import {
	Heading,
	Field
} from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { FieldCompProps } from './index-props';
import { FieldCompState } from './index-state';

import { Layout } from '../../layout';

var styles: any = require('./index.scss');
var fieldStyles: any = require('./variants.scss');
var headingStyles: any = require('../heading/variants.scss');
var buttonStyles: any = require('../button/variants.scss');

export class FieldComp extends React.Component<FieldCompProps.IProps, FieldCompState.IState> {
	//#region Статические переменные

	public static displayName: string = "FieldComp";
	public static propTypes: PropTypes.ValidationMap<FieldCompProps.IProps> = FieldCompProps.types;
	public static defaultProps: FieldCompProps.IProps = FieldCompProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#region Приватные методы

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class FieldComp
	 * @private
	 */
	private _getInitialState(): FieldCompState.IState {
		return {
			// Empty
		}
	}

	private _handleFieldChange = (event: React.FormEvent<HTMLInputElement>, value: string): void => {
		console.log(value);
	}

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class FieldComp
	 * @public
	 * @constructor
	 * @param {FieldCompProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: FieldCompProps.IProps) {
		super(props);

		this.state = this._getInitialState();
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class FieldComp
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
							}}>Поле ввода</Heading>

							<p>Смотри: <Link className={buttonStyles["hyperlink"]} to="/react.toolkit-guides/label">Label</Link></p>

							<div className={styles["component-preview"]}>
								<Field scheme={{
									uniqueId: "this._uniqueIds[0]",
									properties: {
										name: "count",
										value: "",
										validators: [],
										onValueChange: this._handleFieldChange,
										classes: { stylesheet: fieldStyles, block: "field" }
									},
									items: [{
										uniqueId: "input",
										type: ComponentTypes.Field,
										properties: {
											htmlTag: HtmlTagTypes.Input,
											htmlType: HtmlFieldTypes.Text,
											placeholder: "Текст"
										}
									}, {
										uniqueId: "label",
										type: ComponentTypes.Label,
										properties: {
											text: "Введите текст:",
											classes: {
												modifiers: []
											}
										}
									}]
								}} />
							</div>

							<p><code>{"import { Field } from '@timcowebapps/react.toolkit'"}</code></p>

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
