import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ButtonCompProps } from './index-props';
import { ButtonCompState } from './index-state';
export declare class ButtonComp extends React.Component<ButtonCompProps.IProps, ButtonCompState.IState> {
    static displayName: string;
    static propTypes: PropTypes.ValidationMap<ButtonCompProps.IProps>;
    static defaultProps: ButtonCompProps.IProps;
    private _getInitialState;
    private _handleClick;
    constructor(props?: ButtonCompProps.IProps);
    render(): JSX.Element;
}
