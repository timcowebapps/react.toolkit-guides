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
	Label,
	Link
} from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { LabelCompProps } from './index-props';
import { LabelCompState } from './index-state';

import { Layout } from '../../layout';

var styles: any = require('./index.scss');
var labelStyles: any = require('./variants.scss');
var headingStyles: any = require('../heading/variants.scss');
var linkStyles: any = require('../link/variants.scss');
var buttonStyles: any = require('../button/variants.scss');

export class LabelComp extends React.Component<LabelCompProps.IProps, LabelCompState.IState> {
	//#region Статические переменные

	public static displayName: string = "LabelComp";
	public static propTypes: PropTypes.ValidationMap<LabelCompProps.IProps> = LabelCompProps.types;
	public static defaultProps: LabelCompProps.IProps = LabelCompProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	//#region Приватные методы

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class LabelComp
	 * @private
	 */
	private _getInitialState(): LabelCompState.IState {
		return {
			// Empty
		}
	}

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class LabelComp
	 * @public
	 * @constructor
	 * @param {LabelCompProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: LabelCompProps.IProps) {
		super(props);

		this.state = this._getInitialState();
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class LabelComp
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
									style: { stylesheet: headingStyles, bem: { block: "heading" } }
								},
								items: [{
									type: Data.Schema.ComponentTypes.Node,
									requirements: {
										content: "Метка"
									}
								}]
							}} />

							<div className={styles["component-preview"]}>
								<Label {...{
									requirements: {
										htmlTag: HtmlTagTypes.Span,
										text: "Метка 1",
										style: { stylesheet: labelStyles }
									}
								}} />
							</div>

							<p><code>{"import { Label } from '@timcowebapps/react.toolkit'"}</code></p>

							<Heading {...{
								requirements: {
									htmlTag: HtmlTagTypes.H2,
									align: TextAlign.toStr(AlignTypes.Left),
									style: { stylesheet: headingStyles, bem: { block: "heading" } }
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
										<td>Html тег элемента. Допустимые значения <Link {...{
											requirements: {
												htmlTag: HtmlTagTypes.A,
												to: "/react.toolkit-guides/",
												style: { stylesheet: linkStyles, bem: { block: "link" } }
											},
											items: [{
												type: Data.Schema.ComponentTypes.Node,
												requirements: { content: "HtmlTagTypes" }
											}]
										}} /> перечислителя: <code>HtmlTagTypes.Span</code> (по умолчанию)</td>
									</tr>
									<tr>
										<td><code>requirements.associateWith</code></td>
										<td>String | Number</td>
										<td></td>
									</tr>
									<tr>
										<td><code>requirements.text</code></td>
										<td>String</td>
										<td></td>
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
