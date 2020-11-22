import React, {Component} from 'react';
import {isFieldValid, isFormValid, isNumber, round} from '../../../utils/utils';
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux';
import {SimpleTextInput} from '../../formComponents/SimpleTextInput/SimpleTextInput';
import {
    alwaysTrue,
    numberBiggerThanZero,
    numberInRange,
    objectExistAndNotEmpty,
    textNotEmpty
} from '../../../utils/valideFunctions';
import {Spinner} from '../../formComponents/Spinner/Spinner';
import {ComboBox} from '../../formComponents/ComboBox/ComboBox';
import {Link} from 'react-router-dom';
import {newElement} from '../../../utils/newElements';
import {
    initFieldState,
    initValidation
} from '../../otherComponents/simplifiedTableEditForm/simplifiedForm/SimplifiedForm';
import {formStates} from '../../otherComponents/simplifiedTableEditForm/SimplifiedTableEditForm';

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

            //console.log(this.props.products);
            // console.log(initFieldState(this.props.products.labels, componentState));
            // console.log(initValidation(this.props.products.labels, item));

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
            const newValidationObj = {...this.state.validation, [obj.fieldName]: obj.isValid};
            const newItem = {...this.state.item, [obj.fieldName]: obj.value};
            this.setState({...this.state, validation: newValidationObj, item: newItem});
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
                        <SimpleTextInput label={'Nazwa towaru'} errorMessage={'Nazwa towaru nie może być pusta!'}
                                         value={this.state.item.productName} validate={textNotEmpty}
                                         validateFormPropertyName={'productName'} changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('productName')}/>

                        <SimpleTextInput label={'Nazwa towaru cd.'} errorMessage={''}
                                         value={this.state.item.productNameCont} validate={alwaysTrue}
                                         validateFormPropertyName={'productNameCont'} changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('productNameCont')}/>

                        <SimpleTextInput label={'Kod PCN'} errorMessage={''}
                                         value={this.state.item.productCode} validate={textNotEmpty}
                                         validateFormPropertyName={'productCode'} changeValue={this.changeValue}
                                         isFieldValid={this.fieldValid('productCode')}/>

                        <Spinner label={'Ilość sztuk w opakowaniu'} value={this.state.item.piecesInPackage} min={1}
                                 max={100}
                                 delta={1}
                                 errorMessage={'Ilość sztuk w opakowaniu musi zawierać się w zakresie od 1 do 100'}
                                 changeValue={this.changeValue} validate={numberInRange}
                                 validateFormPropertyName={'piecesInPackage'} rounding={0}
                                 isFieldValid={this.fieldValid('piecesInPackage')}
                        />

                        <Spinner label={'Cena netto za sztukę'} value={this.state.item.price} min={0} max={10000}
                                 delta={.1} errorMessage={'Cena musi być liczbą większą lub równą 0'}
                                 changeValue={this.changeValue} validate={numberBiggerThanZero}
                                 validateFormPropertyName={'price'} rounding={2}
                                 isFieldValid={this.fieldValid('price')}
                        />


                        <ComboBox label={'Stawka VAT'} errorMessage={'Wystąpił nieokreślony błąd!!!'}
                                  items={this.props.taxRates}
                                  value={this.state.item.tax} validateFormPropertyName={'tax'}
                                  fieldDisplay={'taxName'} fieldValue={'taxRate'} validate={objectExistAndNotEmpty}
                                  isFieldValid={this.fieldValid('tax')} changeValue={this.changeValue}
                        />

                        <SimpleTextInput label={'Cena brutto'} errorMessage={''}
                                         value={calculateGrossPrice(this.state.item.price, this.state.item.tax)}
                                         validate={alwaysTrue}
                                         isFieldValid={true}/>

                        <ComboBox label={'Jednostka miary'} errorMessage={'Wystąpił nieokreślony błąd!!!'}
                                  items={this.props.units}
                                  value={this.state.item.unitsOfMeasurement}
                                  validateFormPropertyName={'unitsOfMeasurement'}
                                  fieldDisplay={'unit'} fieldValue={'unit'} validate={objectExistAndNotEmpty}
                                  isFieldValid={this.fieldValid('unitsOfMeasurement')} changeValue={this.changeValue}
                        />

                        <Spinner label={'Waga w [kg]'} value={this.state.item.weightInKG} min={0} max={10}
                                 delta={.01} errorMessage={'Waga musi być liczbą większą lub równą 0'}
                                 changeValue={this.changeValue} validate={numberBiggerThanZero}
                                 validateFormPropertyName={'weightInKG'} rounding={3}
                                 isFieldValid={this.fieldValid('weightInKG')}
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

