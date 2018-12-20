import * as React from 'react';
import * as PropTypes from 'prop-types';
import { LayoutProps } from './index-props';
import { LayoutState } from './index-state';
export declare class Layout extends React.Component<LayoutProps.IProps, LayoutState.IState> {
    static displayName: string;
    static propTypes: PropTypes.ValidationMap<LayoutProps.IProps>;
    static defaultProps: LayoutProps.IProps;
    constructor(props?: LayoutProps.IProps);
    private _getInitialState;
    private _handleThemeUpdate;
    render(): JSX.Element;
}
