import React from 'react';
import classNames from 'classnames';
import styles from './style.scss';

export default class Component extends React.Component {
    static propTypes = {
        content: React.PropTypes.string,
        clicks: React.PropTypes.number,
        click: React.PropTypes.func.isRequired
    }

    static defaultProps = {
        content: 'A simple React component',
        clicks: 0
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ classNames(styles['component']) } onClick={ this.props.click } >
                <p><b>{ this.props.content }</b></p>
                <p>clicks: { this.props.clicks }</p>
            </div>
        );
    }
};