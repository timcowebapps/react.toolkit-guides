import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BreadcrumbCompProps } from './index-props';
import { BreadcrumbCompState } from './index-state';
export declare class BreadcrumbComp extends React.Component<BreadcrumbCompProps.IProps, BreadcrumbCompState.IState> {
    static displayName: string;
    static propTypes: PropTypes.ValidationMap<BreadcrumbCompProps.IProps>;
    static defaultProps: BreadcrumbCompProps.IProps;
    private _getInitialState;
    constructor(props?: BreadcrumbCompProps.IProps);
    render(): JSX.Element;
}
