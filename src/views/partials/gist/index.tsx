'use strict';

import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Guid } from '@timcowebapps/react.utils';
import { GistProps } from './index-props';
import { GistState } from './index-state';

export class Gist extends React.Component<GistProps.IProps, GistState.IState> {
	//#region Статические переменные

	public static displayName: string = "Gist";
	public static propTypes: PropTypes.ValidationMap<GistProps.IProps> = GistProps.types;
	public static defaultProps: GistProps.IProps = GistProps.defaults;

	//#endregion

	//#region Приватные переменные

	private _iframeNode: HTMLIFrameElement;
	private _guid: string;

	//#endregion

	//#region Приватные методы

	/**
	 * Начальное состояние свойств по умолчанию.
	 * 
	 * @class Gist
	 * @private
	 */
	private _getInitialState(): GistState.IState {
		return {
			// Empty
		}
	}

	private _updateIframeContent(): void {
		var doc: Document = this._iframeNode.contentDocument;
		var url = "https://gist.github.com/" + this.props.gist + ".js";
		if (this.props.file)
			url += "?file=" + this.props.file;

		const styles = '<style>*{font-size:12px;margin:0;}</style>';
		const resizeScript = `onload="parent.document.getElementById('${this._guid}').style.height=document.body.scrollHeight + 'px'"`;
		const iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}><script type="text/javascript" src="${url}"></script></body></html>`;

		doc.open();
		doc.writeln(iframeHtml);
		doc.close();
	}

	private _updateCss(): void {
		var doc: Document = this._iframeNode.contentDocument;
		
		var link = doc.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', "iframe.css");
        doc.body.appendChild(link);
	}

	//#endregion

	/**
	 * Конструктор класса.
	 * 
	 * @class Gist
	 * @public
	 * @constructor
	 * @param {GistProps.IProps} props Свойства компонента.
	 */
	public constructor(props?: GistProps.IProps) {
		super(props);

		this._guid = Guid.newGuid();
		this.state = this._getInitialState();
	}

	/**
	 * Компонент примонтировался.
	 * В данный момент у нас есть возможность использовать refs.
	 * 
	 * @class Gist
	 * @public
	 */
	public componentDidMount(): void {
		this._updateIframeContent();
		this._updateCss();
	}

	/**
	 * Вызывается сразу после render.
	 * Не вызывается в момент первого render'а компонента.
	 * 
	 * @class Gist
	 * @public
	 * @param {GistProps.IProps} prevProps Предыдушее значение свойств.
	 * @param {GistState.IState} prevState Предыдущее значение состояния.
	 */
	public componentDidUpdate(prevProps: GistProps.IProps, prevState: GistState.IState): void {
		this._updateIframeContent();
		this._updateCss();
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class Gist
	 * @public
	 */
	public render(): JSX.Element {
		return <iframe ref={(node) => { this._iframeNode = node; }} id={this._guid} width="100%" frameBorder={0} />;
	}
};
