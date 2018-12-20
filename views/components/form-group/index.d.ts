import * as React from 'react';
import * as PropTypes from 'prop-types';
import { FieldCompProps } from './index-props';
import { FieldCompState } from './index-state';
export declare class FormGroupComp extends React.Component<FieldCompProps.IProps, FieldCompState.IState> {
    static displayName: string;
    static propTypes: PropTypes.ValidationMap<FieldCompProps.IProps>;
    static defaultProps: FieldCompProps.IProps;
    private _uids;
    private _getInitialState;
    private _handleNameChange;
    private _handlePhoneChange;
    private _handleQuantityChange;
    constructor(props?: FieldCompProps.IProps);
    render(): JSX.Element;
}
