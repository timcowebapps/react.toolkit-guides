'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
	BEM, Classes,
	AlignTypes, TextAlign,
	HtmlTagTypes
} from '@timcowebapps/react.utils';
import {
	Heading,
	Panel
} from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { PanelCompProps } from './index-props';
import { PanelCompState } from './index-state';

import { Layout } from '../../layout';

var styles: any = require('./index.scss');
var panelStyles: any = require('./variants.scss');
var headingStyles: any = require('../heading/variants.scss');
var buttonStyles: any = require('../button/variants.scss');

export class PanelComp extends React.Component<PanelCompProps.IProps, PanelCompState.IState> {
	//#region Статические переменные

	public static displayName: string = "PanelComp";
	public static propTypes: PropTypes.ValidationMap<PanelCompProps.IProps> = PanelCompProps.types;
	public static defaultProps: PanelCompProps.IProps = PanelCompProps.defaults;

	//#endregion

	//#region Приватные переменные

	//#endregion

	//#region Приватные методы

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class PanelComp
	 * @private
	 */
	private _getInitialState(): PanelCompState.IState {
		return {
			// Empty
		}
	}

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class PanelComp
	 * @public
	 * @constructor
	 * @param {PanelCompProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: PanelCompProps.IProps) {
		super(props);

		this.state = this._getInitialState();
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class PanelComp
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
							}}>Панель</Heading>

							<div className={styles["component-preview"]}>
								<Panel scheme={{
									properties: {
										content: "Панель 1",
										classes: { stylesheet: panelStyles, block: "panel" }
									}
								}} />
							</div>

							<p><code>{"import { Panel } from '@timcowebapps/react.toolkit'"}</code></p>

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
										<td><code>properties.role</code></td>
										<td>String</td>
										<td></td>
									</tr>
									<tr>
										<td><code>properties.content</code></td>
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
