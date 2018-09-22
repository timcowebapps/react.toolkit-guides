'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	BEM, Classes,
	AlignTypes, TextAlign,
	HtmlTagTypes
} from '@timcowebapps/react.utils';
import {
	Heading,
	Label
} from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { LabelCompProps } from './index-props';
import { LabelCompState } from './index-state';

import { Layout } from '../../layout';

var styles: any = require('./index.scss');
var labelStyles: any = require('./variants.scss');
var headingStyles: any = require('../heading/variants.scss');
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
							}}>Метка</Heading>

							<div className={styles["component-preview"]}>
								<Label scheme={{
									properties: {
										htmlTag: HtmlTagTypes.Span,
										text: "Метка 1",
										classes: { stylesheet: labelStyles }
									}
								}} />
							</div>

							<p><code>{"import { Label } from '@timcowebapps/react.toolkit'"}</code></p>

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
										<td>Html тег элемента. Допустимые значения <Link className={buttonStyles["hyperlink"]} to="/react.toolkit-guides/">HtmlTagTypes</Link> перечислителя: <code>HtmlTagTypes.Span</code> (по умолчанию)</td>
									</tr>
									<tr>
										<td><code>properties.associateWith</code></td>
										<td>String | Number</td>
										<td></td>
									</tr>
									<tr>
										<td><code>properties.text</code></td>
										<td>String</td>
										<td></td>
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
