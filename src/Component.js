import React from 'react';
import styles from './Component.scss';

export default class Component extends React.Component {
    static propTypes = {
        content: React.PropTypes.string
    }

    static defaultProps = {
        content: 'A simple React component'
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ styles.component } >{ this.props.content }</div>
        );
    }
};