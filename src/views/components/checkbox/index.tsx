'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CN, AlignTypes, AlignTransform, HtmlTagTypes } from '@timcowebapps/react.utils';
import { Methodology } from '@timcowebapps/react.style';
import { Data } from '@timcowebapps/react.componentmodel';
import { Heading, Hyperlink, Checkbox } from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { RouteConstants } from '../../../shared/routeconstants';
import { CheckboxCompProps } from './index-props';
import { CheckboxCompState } from './index-state';

import { Layout } from '../../layout';

var styles: any = require('./index.scss');
var headingStyles: any = require('../heading/variants.scss');
var linkStyles: any = require('../link/variants.scss');
var checkboxStyles: any = require('../checkbox/variants.scss');

export class CheckboxComp extends React.Component<CheckboxCompProps.IProps, CheckboxCompState.IState> {
	//#region Статические переменные

	public static displayName: string = "CheckboxComp";
	public static propTypes: PropTypes.ValidationMap<CheckboxCompProps.IProps> = CheckboxCompProps.types;
	public static defaultProps: CheckboxCompProps.IProps = CheckboxCompProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	//#region Приватные методы

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class CheckboxComp
	 * @private
	 */
	private _getInitialState(): CheckboxCompState.IState {
		return {
			checked: false
		}
	}

	private _handleChange(event: any) {
		this.setState({
			checked: !this.state.checked
		})
	}

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class CheckboxComp
	 * @public
	 * @constructor
	 * @param {CheckboxCompProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: CheckboxCompProps.IProps) {
		super(props);

		this.state = this._getInitialState();

		//#region Bindings
		
		this._handleChange = this._handleChange.bind(this);

		//#endregion
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class CheckboxComp
	 * @public
	 */
	public render(): JSX.Element {
		return (
			<Layout>
				<div className={styles["container-fluid"]}>
					<div className={CN.many(styles["row"],
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
										content: "Чек"
									}
								}]
							}} />

							<p></p>

							<p>Смотри: <Hyperlink {...{
								requirements: {
									to: RouteConstants.Label,
									onClick: (e: React.MouseEvent<HTMLElement>, href: string) => {
										e.preventDefault();
										this.props.history.replace(href);
									},
									viewStyle: { stylesheet: linkStyles, bem: { block: "link" } },
								},
								items: [{
									type: Data.Schema.ComponentTypes.Node,
									requirements: {
										content: "Label"
									}
								}]
							}} /></p>

							<div className={styles["component-preview"]}>
								<Checkbox {...{
									requirements: {
										name: "noname",
										value: 0,
										checked: this.state.checked,
										disabled: false,
										onChange: this._handleChange,
										viewStyle: { stylesheet: checkboxStyles, bem: { block: "checkbox" } }
									},
									items: [{
										type: Data.Schema.ComponentTypes.Input,
										requirements: { }
									}, {
										type: Data.Schema.ComponentTypes.Label,
										requirements: {
											text: this.state.checked ? "checkbox is checked" : "checkbox"
										}
									}]
								}} />
							</div>

							<p><code>{"import { Checkbox } from '@timcowebapps/react.toolkit'"}</code></p>

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
