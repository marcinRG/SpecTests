import React, {Component} from 'react';
import {Tabs} from '../../otherComponents/tab/Tabs';
import {Tab} from '../../otherComponents/tab/Tab';
import {TabPanel} from '../../otherComponents/tab/TabPanel';
import SimplifiedTaxRates from '../../simplifedFormTables/SimplifiedTaxRates';
import SimplifiedCurrencies from '../../simplifedFormTables/SimplifiedCurrencies';
import SimplifiedMethodsOfPayments from '../../simplifedFormTables/SimplifiedMethodsOfPayments';
import SimplifiedCars from '../../simplifedFormTables/SimplifiedCars';
import SimplifiedTextAdditions from '../../simplifedFormTables/SimplifiedTextAdditions';
import SimplifiedUnitsOfMeasurements from '../../simplifedFormTables/SimplifiedUnitsOfMeasurements';
import SimplifiedInvoiceTypes from '../../simplifedFormTables/SimplifiedInvoiceTypes';

export class OtherTablesPage extends Component {
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
            <React.Fragment>
                <section className="table-page">
                    <h2 className="form-title">Other <span className="blue">tables & settings</span></h2>
                    <div className="tab-container">
                        <Tabs>
                            <Tab id={0} action={this.changeSelected} text={'Tax rates'} selected={this.state.selected}/>
                            <Tab id={1} action={this.changeSelected} text={'Currencies'}
                                 selected={this.state.selected}/>
                            <Tab id={2} action={this.changeSelected} text={'Methods of payments'}
                                 selected={this.state.selected}/>
                            <Tab id={3} action={this.changeSelected} text={'Cars'}
                                 selected={this.state.selected}/>
                            <Tab id={4} action={this.changeSelected} text={'Text additions'}
                                 selected={this.state.selected}/>
                            <Tab id={5} action={this.changeSelected} text={'Units of measurement'}
                                 selected={this.state.selected}/>
                            <Tab id={6} action={this.changeSelected} text={'Invoice Types'}
                                 selected={this.state.selected}/>
                        </Tabs>
                        <TabPanel id={0} selected={this.state.selected}>
                            <SimplifiedTaxRates isSelected={this.state.selected===0}/>
                        </TabPanel>
                        <TabPanel id={1} selected={this.state.selected}>
                            <SimplifiedCurrencies isSelected={this.state.selected===1}/>
                        </TabPanel>
                        <TabPanel id={2} selected={this.state.selected}>
                            <SimplifiedMethodsOfPayments isSelected={this.state.selected===2}/>
                        </TabPanel>
                        <TabPanel id={3} selected={this.state.selected}>
                            <SimplifiedCars isSelected={this.state.selected===3}/>
                        </TabPanel>
                        <TabPanel id={4} selected={this.state.selected}>
                            <SimplifiedTextAdditions isSelected={this.state.selected===4}/>
                        </TabPanel>
                        <TabPanel id={5} selected={this.state.selected}>
                            <SimplifiedUnitsOfMeasurements isSelected={this.state.selected===5}/>
                        </TabPanel>
                        <TabPanel id={6} selected={this.state.selected}>
                            <SimplifiedInvoiceTypes isSelected={this.state.selected===6}/>
                        </TabPanel>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
