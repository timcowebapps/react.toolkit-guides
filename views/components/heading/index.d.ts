import * as React from 'react';
import * as PropTypes from 'prop-types';
import { HeadingCompProps } from './index-props';
import { HeadingCompState } from './index-state';
export declare class HeadingComp extends React.Component<HeadingCompProps.IProps, HeadingCompState.IState> {
    static displayName: string;
    static propTypes: PropTypes.ValidationMap<HeadingCompProps.IProps>;
    static defaultProps: HeadingCompProps.IProps;
    private _getInitialState;
    constructor(props?: HeadingCompProps.IProps);
    render(): JSX.Element;
}
