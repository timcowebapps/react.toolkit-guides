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
	Link
} from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { HeadingCompProps } from './index-props';
import { HeadingCompState } from './index-state';

import { Layout } from '../../layout';

var styles: any = require('./index.scss');
var headingStyles: any = require('./variants.scss');
var linkStyles: any = require('../link/variants.scss');
var buttonStyles: any = require('../button/variants.scss');

export class HeadingComp extends React.Component<HeadingCompProps.IProps, HeadingCompState.IState> {
	//#region Статические переменные

	public static displayName: string = "HeadingComp";
	public static propTypes: PropTypes.ValidationMap<HeadingCompProps.IProps> = HeadingCompProps.types;
	public static defaultProps: HeadingCompProps.IProps = HeadingCompProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	//#region Приватные методы

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class HeadingComp
	 * @private
	 */
	private _getInitialState(): HeadingCompState.IState {
		return {
			// Empty
		}
	}

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class HeadingComp
	 * @public
	 * @constructor
	 * @param {HeadingCompProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: HeadingCompProps.IProps) {
		super(props);

		this.state = this._getInitialState();
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class HeadingComp
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
										content: "Заголовок"
									}
								}]
							}} />

							<div className={styles["component-preview"]}>
								{Array.apply(0, Array(6)).map((value: any, idx: number) =>
									<Heading key={idx} {...{
										requirements: {
											htmlTag: HtmlTagTypes[`H${idx + 1}`],
											align: TextAlign.toStr(AlignTypes.Left),
											style: { stylesheet: headingStyles, bem: { block: "heading" } }
										},
										items: [{
											type: Data.Schema.ComponentTypes.Node,
											requirements: {
												content: `h${idx + 1}. React.Toolkit heading`
											}
										}]
									}} />
								)}
							</div>

							<p><code>{"import { Heading } from '@timcowebapps/react.toolkit'"}</code></p>

							<Heading {...{
								requirements: {
									htmlTag: HtmlTagTypes.H2,
									align: TextAlign.toStr(AlignTypes.Left),
									style: { stylesheet: headingStyles, bem: { block: "heading", modifiers: ["underline"] } }
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
										}} /> перечислителя: <code>HtmlTagTypes.H1&nbsp;...&nbsp;H6</code>, <code>HtmlTagTypes.H3</code> (по умолчанию)</td>
									</tr>
									<tr>
										<td><code>requirements.align</code></td>
										<td>String</td>
										<td>Выравнивание текста. Допустимые значения: <code>left</code>, <code>center</code> (по умолчанию), <code>right</code> и <code>justify</code></td>
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

							<Gist gist="7ad3f4405230ae6c0fe4eeb200d5ee71" file="heading.jsx" />
						</div>
					</div>
				</div>
			</Layout>
		);
	}
};
