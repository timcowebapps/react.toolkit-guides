import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PanelCompProps } from './index-props';
import { PanelCompState } from './index-state';
export declare class PanelComp extends React.Component<PanelCompProps.IProps, PanelCompState.IState> {
    static displayName: string;
    static propTypes: PropTypes.ValidationMap<PanelCompProps.IProps>;
    static defaultProps: PanelCompProps.IProps;
    private _getInitialState;
    constructor(props?: PanelCompProps.IProps);
    render(): JSX.Element;
}
