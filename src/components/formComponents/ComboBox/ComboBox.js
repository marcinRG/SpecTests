import './ComboBox.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ComboBoxItem} from './ComboBoxItem';

export class ComboBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showItems: false,
            selected: '',
            isError: false,
            items: ['lorem ipsum', 'costam costam', 'excetucable', 'random func']
        };
        this.toggleItemsList = this.toggleItemsList.bind(this);
        this.changeSelected = this.changeSelected.bind(this);
    }

    changeSelected(item) {
        this.setState({
            showItems: false,
            selected: item
        });
    }

    toggleItemsList(event) {
        event.preventDefault();
        this.setState({showItems: !this.state.showItems});
    }

    render() {
        return (
            <div className="combobox-input">
                <label className="input-label">{this.props.label}</label>
                <div className="inputs">
                    <input type="text" className="input-field" value={this.state.selected} readOnly={true}/>
                    <button className="input-btn" onClick={this.toggleItemsList}><span>&#x25bc;</span></button>
                </div>
                <ul className="list-of-elements" style={setListStyle(this.state.showItems, this.state.items)}>
                    {this.state.items.map((elem, index) =>
                        <ComboBoxItem key={index} value={elem} action={this.changeSelected}/>
                    )}
                </ul>
                {this.state.isError &&
                <div className="error-msg">
                    <span className="error-txt">This is some random error message!!!</span>
                </div>}

            </div>
        )
    }
}

ComboBox.propTypes = {
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    validation: PropTypes.object
};

function getHeight(array) {
    return (array.length * 49) + 'px';
}

function setListStyle(show, array) {
    if (show) {
        return {height: getHeight(array)};
    }
    return {height: 0};
}