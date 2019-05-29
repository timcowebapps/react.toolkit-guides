'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CN, AlignTypes, AlignTransform, HtmlTagTypes } from '@timcowebapps/react.utils';
import { Methodology } from '@timcowebapps/react.style';
import { Data } from '@timcowebapps/react.componentmodel';
import { Heading, Panel } from '@timcowebapps/react.toolkit';
import { Gist } from '../../partials/gist';
import { RouteConstants } from '../../../shared/routeconstants';
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
										content: "Панель"
									}
								}]
							}} />

							<div className={styles["component-preview"]}>
								<Panel {...{
									requirements: {
										content: "Панель 1",
										viewStyle: { stylesheet: panelStyles, bem: { block: "panel" } }
									}
								}} />
							</div>

							<p><code>{"import { Panel } from '@timcowebapps/react.toolkit'"}</code></p>

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
										<td><code>requirements.role</code></td>
										<td>String</td>
										<td></td>
									</tr>
									<tr>
										<td><code>requirements.content</code></td>
										<td>String</td>
										<td></td>
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
