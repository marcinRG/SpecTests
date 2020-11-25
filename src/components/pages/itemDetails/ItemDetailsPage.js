import React, {Component} from 'react';
import {isFieldValid, isFormValid, isNumber, round} from '../../../utils/utils';
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux';
import {SimpleTextInput} from '../../formComponents/SimpleTextInput/SimpleTextInput';
import {
    alwaysTrue,
    numberBiggerThanZero,
    numberInRange,
    objectExistAndNotEmpty, textIsPCNNumber,
    textNotEmpty
} from '../../../utils/valideFunctions';
import {Spinner} from '../../formComponents/Spinner/Spinner';
import {ComboBox} from '../../formComponents/ComboBox/ComboBox';
import {Link} from 'react-router-dom';
import {newElement} from '../../../utils/newElements';
import {
    fieldState,
    initFieldState,
    initValidation
} from '../../otherComponents/simplifiedTableEditForm/simplifiedForm/SimplifiedForm';
import {formStates} from '../../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';
import {dataTypes} from '../../../utils/dataTypes';


export class ItemDetailsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            validation: {},
            editedFields: {}
        };

        this.formValid = this.formValid.bind(this);
        this.fieldValid = this.fieldValid.bind(this);
        this.save = this.save.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.setItem = this.setItem.bind(this);
        this.getItem = this.getItem.bind(this);
    }

    componentDidMount() {
        let item = {};
        let componentState;
        if (this.props.match.params && this.props.match.params.itemID) {
            if (this.props.match.params.itemID === newElement.NEW_ITEM) {
                componentState = formStates.ADD_NEW;
            } else {
                item = this.getItem(this.props.match.params.itemID);
                componentState = formStates.EDIT;
            }

            this.setState({
                item,
                validation: initValidation(this.props.products.labels, item),
                editedFields: initFieldState(this.props.products.labels, componentState)
            })

        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params && this.props.match.params.itemID) {
            if (this.props.match.params.itemID != prevProps.match.params.itemID) {
                this.setItem(this.props.match.params.itemID);
            }
        }
    }

    save(event) {
        event.preventDefault();
    }

    changeValue(obj) {
        if (obj) {
            const newEditedFields = {...this.state.editedFields, [obj.fieldName]: fieldState.EDITED};
            const newValidationObj = {...this.state.validation, [obj.fieldName]: obj.isValid};
            const newItem = {...this.state.item, [obj.fieldName]: obj.value};
            this.setState({item: newItem, validation: newValidationObj, editedFields: newEditedFields});
        }
    }

    fieldValid(fieldName) {
        return isFieldValid(fieldName, this.state.validation);
    }

    formValid() {
        return isFormValid(this.state.validation);
    }

    getItem(id) {
        return this.props.products.data[id]
    }

    setItem(item) {
        if (item) {
            this.setState({
                item
            })
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="form-page">
                    <h2 className="form-title">Item <span className="blue">details</span></h2>
                    {this.state.item &&
                    <form className="input-form">
                        <SimpleTextInput value={this.state.item.productName} changeValue={this.changeValue}
                                         labels={this.props.products.labels['productName']} propertyName={'productName'}
                                         fieldStates={this.state.editedFields}/>

                        <SimpleTextInput value={this.state.item.productNameCont} propertyName={'productNameCont'}
                                         labels={this.props.products.labels['productNameCont']}
                                         changeValue={this.changeValue}
                                         fieldStates={this.state.editedFields}/>

                        <SimpleTextInput value={this.state.item.productCode}
                                         labels={this.props.products.labels['productCode']}
                                         propertyName={'productCode'} changeValue={this.changeValue}
                                         fieldStates={this.state.editedFields} validationFunction={textIsPCNNumber}/>

                        <Spinner value={this.state.item.price} min={0} max={10000} rounding={2}
                                 delta={.1} changeValue={this.changeValue} validationFunction={numberBiggerThanZero}
                                 labels={this.props.products.labels['price']} propertyName={'price'}
                                 fieldStates={this.state.editedFields}
                        />

                        <ComboBox items={this.props.taxRates}
                                  value={this.state.item.tax}
                                  labels={this.props.products.labels['tax']} propertyName={'tax'}
                                  propertyDisplay={'taxName'}
                                  changeValue={this.changeValue}
                                  fieldStates={this.state.editedFields}
                        />

                        <SimpleTextInput labels={{
                            labelName: 'cena brutto',
                            dataType: dataTypes.NUMBER,
                            required: false,
                            errorMsg: 'Musisz podać cenę produktu'
                        }}  value={calculateGrossPrice(this.state.item.price, this.state.item.tax)}
                        />


                        <Spinner value={this.state.item.weightInKG} min={0.001} max={10}
                                 delta={.01} rounding={3}
                                 changeValue={this.changeValue} validationFunction={numberBiggerThanZero}
                                 labels={this.props.products.labels['weightInKG']} propertyName={'weightInKG'}
                                 fieldStates={this.state.editedFields}
                        />


                        <Spinner value={this.state.item.piecesInPackage} min={1} max={100} delta={1}
                                 labels={this.props.products.labels['piecesInPackage']} propertyName={'piecesInPackage'}
                                 changeValue={this.changeValue} validationFunction={numberInRange} rounding={0}
                                 fieldStates={this.state.editedFields}
                        />


                        <ComboBox
                            items={this.props.units}
                            value={this.state.item.unitsOfMeasurement}
                            changeValue={this.changeValue}
                            fieldStates={this.state.editedFields}
                            labels={this.props.products.labels['unitsOfMeasurement']}
                            propertyName={'unitsOfMeasurement'}
                            propertyDisplay={'unit'}
                        />

                        <button className="rounded-button blue btn-save" onClick={this.save}
                                disabled={!this.formValid()}>Save
                        </button>

                    </form>}
                    <div>
                        <Link className="rounded-button blue btn-back" to={'/items'}>Back</Link>
                    </div>

                </section>
            </React.Fragment>
        )
    }
}

export function calculateGrossPrice(netPrice, taxRate) {
    if (isNumber(netPrice) && taxRate && isNumber(taxRate.taxRate)) {
        const gross = Number.parseFloat(netPrice) + Number.parseFloat(netPrice) * Number.parseFloat(taxRate.taxRate);
        return '' + round(gross, 2);
    }
    return '0';
}

function mapStateToProps(state) {
    return {
        products: state.products,
        units: state.additionalTables.unitsOfMeasurement.data,
        taxRates: state.additionalTables.taxRates.data
    };
}


ItemDetailsPage.propTypes = {
    match: PropTypes.object,
    products: PropTypes.object,
    taxRates: PropTypes.object,
    units: PropTypes.object
}

export default connect(mapStateToProps)(ItemDetailsPage);

