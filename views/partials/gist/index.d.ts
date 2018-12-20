import * as React from 'react';
import * as PropTypes from 'prop-types';
import { GistProps } from './index-props';
import { GistState } from './index-state';
export declare class Gist extends React.Component<GistProps.IProps, GistState.IState> {
    static displayName: string;
    static propTypes: PropTypes.ValidationMap<GistProps.IProps>;
    static defaultProps: GistProps.IProps;
    private _iframeNode;
    private _guid;
    private _getInitialState;
    private _updateIframeContent;
    private _updateCss;
    constructor(props?: GistProps.IProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: GistProps.IProps, prevState: GistState.IState): void;
    render(): JSX.Element;
}
