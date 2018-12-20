import * as React from 'react';
import * as PropTypes from 'prop-types';
import { LabelCompProps } from './index-props';
import { LabelCompState } from './index-state';
export declare class LabelComp extends React.Component<LabelCompProps.IProps, LabelCompState.IState> {
    static displayName: string;
    static propTypes: PropTypes.ValidationMap<LabelCompProps.IProps>;
    static defaultProps: LabelCompProps.IProps;
    private _getInitialState;
    constructor(props?: LabelCompProps.IProps);
    render(): JSX.Element;
}
