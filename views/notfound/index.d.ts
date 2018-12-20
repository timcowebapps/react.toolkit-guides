import * as React from 'react';
import * as PropTypes from 'prop-types';
import { NotFoundPageProps } from './index-props';
import { NotFoundPageState } from './index-state';
export declare class NotFoundPage extends React.Component<NotFoundPageProps.IProps, NotFoundPageState.IState> {
    static displayName: string;
    static propTypes: PropTypes.ValidationMap<NotFoundPageProps.IProps>;
    static defaultProps: NotFoundPageProps.IProps;
    constructor(props?: NotFoundPageProps.IProps);
    private _getInitialState;
    render(): JSX.Element;
}
