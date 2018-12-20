import * as PropTypes from 'prop-types';
export declare namespace GistProps {
    interface IProps {
        gist: string;
        file?: string;
    }
    const types: PropTypes.ValidationMap<IProps>;
    const defaults: IProps;
}
