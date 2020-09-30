import React, {Component} from 'react';
import {Tabs} from '../tabs/Tabs';
import {TabPanel} from '../tabPanel/TabPanel';
import {Tab} from '../tab/Tab';
import {SimplifiedTableEditForm} from '../../simplifiedTableEditForm/SimplifiedTableEditForm';

export class TabContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
        this.changeSelected = this.changeSelected.bind(this);
    }

    changeSelected(id) {
        this.setState({
            selected: id
        });
    }

    render() {
        return (
            <div className="tab-container">
                <Tabs>
                    <Tab id={0} action={this.changeSelected} text={'Tax rates'} selected={this.state.selected}/>
                    <Tab id={1} action={this.changeSelected} text={'Currencies'} selected={this.state.selected}/>
                    <Tab id={2} action={this.changeSelected} text={'Methods of payments'}
                         selected={this.state.selected}/>
                    <Tab id={3} action={this.changeSelected} text={'Account types'} selected={this.state.selected}/>
                    <Tab id={4} action={this.changeSelected} text={'Text additions'} selected={this.state.selected}/>
                    <Tab id={5} action={this.changeSelected} text={'Units of measurement'}
                         selected={this.state.selected}/>
                    <Tab id={6} action={this.changeSelected} text={'Invoice Types'} selected={this.state.selected}/>
                </Tabs>
                <TabPanel id={0} selected={this.state.selected}>
                    <span>Tab Panel 1</span>
                    <SimplifiedTableEditForm/>
                </TabPanel>
                <TabPanel id={1} selected={this.state.selected}>
                    <span>Tab Panel 2</span>
                </TabPanel>
                <TabPanel id={2} selected={this.state.selected}>
                    <span>Tab Panel 3</span>
                </TabPanel>
                <TabPanel id={3} selected={this.state.selected}>
                    <span>Tab Panel 4</span>
                </TabPanel>
                <TabPanel id={4} selected={this.state.selected}>
                    <span>Tab Panel 5</span>
                </TabPanel>
                <TabPanel id={5} selected={this.state.selected}>
                    <span>Tab Panel 6</span>
                </TabPanel>
                <TabPanel id={6} selected={this.state.selected}>
                    <span>Tab Panel 7</span>
                </TabPanel>
            </div>
        );
    }
}
