'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
	CN,
	AlignTypes, TextAlign,
	HtmlTagTypes, HtmlInputTypes
} from '@timcowebapps/react.utils';
import { Guid } from '@timcowebapps/react.system';
import { Methodology } from '@timcowebapps/react.style';
import { Data } from '@timcowebapps/react.componentmodel';
import {
	Heading,
	Link,
	FormGroup, NumInput, PhoneInput
} from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { FieldCompProps } from './index-props';
import { FieldCompState } from './index-state';

import { Layout } from '../../layout';

var styles: any = require('./index.scss');
var formGroupStyles: any = require('./variants.scss');
var inputStyles: any = require('../input/variants.scss');
var labelStyles: any = require('../label//variants.scss');
var headingStyles: any = require('../heading/variants.scss');
var linkStyles: any = require('../link/variants.scss');
var buttonStyles: any = require('../button/variants.scss');

export class FormGroupComp extends React.Component<FieldCompProps.IProps, FieldCompState.IState> {
	//#region Статические переменные

	public static displayName: string = "FormGroupComp";
	public static propTypes: PropTypes.ValidationMap<FieldCompProps.IProps> = FieldCompProps.types;
	public static defaultProps: FieldCompProps.IProps = FieldCompProps.defaults;

	//#endregion

	//#region Приватные переменные

	private _uids: Array<string> = [];

	//#region Приватные методы

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class FormGroupComp
	 * @private
	 */
	private _getInitialState(): FieldCompState.IState {
		return {
			name: "",
			phone: "",
			quantity: 1
		}
	}

	private _handleNameChange = (event: React.FormEvent<HTMLInputElement>, value: string): void => {
		this.setState({ name: value });
	}

	private _handlePhoneChange = (event: React.FormEvent<HTMLInputElement>, value: string): void => {
		this.setState({ phone: value });
	}

	private _handleQuantityChange = (event: React.FormEvent<HTMLInputElement>, value: string): void => {
		this.setState({ quantity: parseInt(value) });
	}

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class FormGroupComp
	 * @public
	 * @constructor
	 * @param {FieldCompProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: FieldCompProps.IProps) {
		super(props);

		this.state = this._getInitialState();

		this._uids = [Guid.newGuid(), Guid.newGuid()];

		this._handleNameChange = this._handleNameChange.bind(this);
		this._handlePhoneChange = this._handlePhoneChange.bind(this);
		this._handleQuantityChange = this._handleQuantityChange.bind(this);
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class FormGroupComp
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
									style: { stylesheet: headingStyles,rules: { bem: {  block: "heading" }}}
								},
								items: [{
									type: Data.Schema.ComponentTypes.Node,
									requirements: {
										content: "Поле ввода"
									}
								}]
							}} />

							<p>Смотри: <Link {...{
								requirements: {
									htmlTag: HtmlTagTypes.A,
									to: "/react.toolkit-guides/label",
									style: { stylesheet: linkStyles, rules: { bem: { block: "link" }}}
								},
								items: [{
									type: Data.Schema.ComponentTypes.Node,
									requirements: { content: "Label" }
								}]
							}} /></p>

							<div className={styles["component-preview"]}>
								<FormGroup {...{
									uid: this._uids[0],
									requirements: {
										style: { stylesheet: formGroupStyles,rules: { bem: { block: "form-group" }}}
									},
									items: [{
										type: Data.Schema.ComponentTypes.Label,
										requirements: {
											text: "Введите текст:",
											style: {stylesheet: labelStyles}
										}
									}, {
										type: Data.Schema.ComponentTypes.Input,
										requirements: {
											htmlTag: HtmlTagTypes.Input,
											htmlType: HtmlInputTypes.Text,
											name: "name",
											value: "",
											validators: [],
											onValueChange: this._handleNameChange,
											placeholder: "Текст",
											style: { stylesheet: inputStyles,rules: { bem: {  block: "form-group", element: "input" }}}
										}
									}]
								}} />

								<PhoneInput {...{
									uid: this._uids[1],
									requirements: {
										style: { stylesheet: inputStyles, rules: { bem: { block: "phone-input" }}}
									},
									items: [{
										type: Data.Schema.ComponentTypes.Input,
										requirements: {
											htmlType: HtmlInputTypes.Text,
											name: "phone",
											value: this.state.phone,
											validators: [],
											onValueChange: this._handlePhoneChange,
											style: { stylesheet: inputStyles,rules: { bem: {  block: "phone-input", element: "input" }}}
										}
									}]
								}} />

								<NumInput {...{
									uid: this._uids[2],
									requirements: {
										style: { stylesheet: inputStyles, rules: { bem: { block: "num-input" }}}
									},
									items: [{
										type: Data.Schema.ComponentTypes.Input,
										requirements: {
											htmlType: HtmlInputTypes.Number,
											name: "quantity",
											value: this.state.quantity.toString(),
											validators: [],
											onValueChange: this._handleQuantityChange,
											style: { stylesheet: inputStyles,rules: { bem: {  block: "num-input", element: "input" }}}
										}
									}, {
										type: Data.Schema.ComponentTypes.Spinner,
										items: [{
											type: Data.Schema.ComponentTypes.SpinButton,
											requirements: {
												htmlTag: HtmlTagTypes.Button,
												dataAttribs: {
													quantity: "decrement"
												},
												style: { stylesheet: buttonStyles, rules: { bem: { block: "num-input", element: "btn", modifiers: ["primary", "decrement"] }}}
											},
											items: [{
												type: Data.Schema.ComponentTypes.Node,
												requirements: {
													content: "-"
												}
											}]
										}, {
											type: Data.Schema.ComponentTypes.SpinButton,
											requirements: {
												htmlTag: HtmlTagTypes.Button,
												dataAttribs: {
													quantity: "increment"
												},
												style: { stylesheet: buttonStyles,rules: { bem: {  block: "num-input", element: "btn", modifiers: ["primary", "increment"] }}}
											},
											items: [{
												type: Data.Schema.ComponentTypes.Node,
												requirements: {
													content: "+"
												}
											}]
										}]
									}]
								}} />
							</div>

							<p><code>{"import { FormGroup } from '@timcowebapps/react.toolkit'"}</code></p>

							<Heading {...{
								requirements: {
									htmlTag: HtmlTagTypes.H2,
									align: TextAlign.toStr(AlignTypes.Left),
									style: { stylesheet: headingStyles, rules: { bem: { block: "heading" }}}
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
										<td><code>requirements.style.stylesheet</code></td>
										<td>Object</td>
										<td>Карта каскадных стилей</td>
									</tr>
									<tr>
										<td><code>requirements.style.block</code></td>
										<td>String</td>
										<td>Имя блока</td>
									</tr>
									<tr>
										<td><code>requirements.style.modifiers</code></td>
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
