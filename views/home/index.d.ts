import * as React from 'react';
import * as PropTypes from 'prop-types';
import { HomePageProps } from './index-props';
import { HomePageState } from './index-state';
export declare class HomePage extends React.Component<HomePageProps.IProps, HomePageState.IState> {
    static displayName: string;
    static propTypes: PropTypes.ValidationMap<HomePageProps.IProps>;
    static defaultProps: HomePageProps.IProps;
    constructor(props?: HomePageProps.IProps);
    private _getInitialState;
    render(): JSX.Element;
}
