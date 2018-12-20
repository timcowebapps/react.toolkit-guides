import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TabSetCompProps } from './index-props';
import { TabSetCompState } from './index-state';
export declare class TabSetComp extends React.Component<TabSetCompProps.IProps, TabSetCompState.IState> {
    static displayName: string;
    static propTypes: PropTypes.ValidationMap<TabSetCompProps.IProps>;
    static defaultProps: TabSetCompProps.IProps;
    private _getInitialState;
    private _handleTabChange;
    constructor(props?: TabSetCompProps.IProps);
    render(): JSX.Element;
}
