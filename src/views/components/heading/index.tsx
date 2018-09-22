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
	Heading
} from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { HeadingCompProps } from './index-props';
import { HeadingCompState } from './index-state';

import { Layout } from '../../layout';

var styles: any = require('./index.scss');
var headingStyles: any = require('./variants.scss');
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
							}}>Заголовок</Heading>

							<div className={styles["component-preview"]}>
							</div>

							<p><code>{"import { Heading } from '@timcowebapps/react.toolkit'"}</code></p>

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
										<td>Html тег элемента. Допустимые значения <Link className={buttonStyles["hyperlink"]} to="/react.toolkit-guides/">HtmlTagTypes</Link> перечислителя: <code>HtmlTagTypes.H1&nbsp;...&nbsp;H6</code>, <code>HtmlTagTypes.H3</code> (по умолчанию)</td>
									</tr>
									<tr>
										<td><code>properties.align</code></td>
										<td>String</td>
										<td>Выравнивание текста. Допустимые значения: <code>left</code>, <code>center</code> (по умолчанию), <code>right</code> и <code>justify</code></td>
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

							<Gist gist="7ad3f4405230ae6c0fe4eeb200d5ee71" file="heading.jsx" />
						</div>
					</div>
				</div>
			</Layout>
		);
	}
};
