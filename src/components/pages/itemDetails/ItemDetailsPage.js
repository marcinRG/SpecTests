import React, {Component} from 'react';
import {isFieldValid, isFormValid} from '../../../utils/utils';
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux';
import {SimpleTextInput} from '../../formComponents/SimpleTextInput/SimpleTextInput';
import {alwaysTrue, numberBiggerThanZero, textNotEmpty} from '../../../utils/valideFunctions';
import {Spinner} from '../../formComponents/Spinner/Spinner';
import {ComboBox} from '../../formComponents/ComboBox/ComboBox';

export class ItemDetailsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            validation: {}
        }

        this.formValid = this.formValid.bind(this);
        this.fieldValid = this.fieldValid.bind(this);
        this.save = this.save.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.setItem = this.setItem.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params && this.props.match.params.itemID) {
            this.setItem(this.props.match.params.itemID);
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

    setItem(id) {
        if (id) {
            this.setState({
                item: this.props.products.data[id]
            })
        }
    }

    render() {
        console.log(this.fieldValid('price'));
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

                        <Spinner label={'Cena netto za sztukę'} value={this.state.item.price} min={0} max={10000}
                                 delta={.1} errorMessage={'Cena nie może być mniejsza lub równa zero'}
                                 changeValue={this.changeValue} validate={numberBiggerThanZero}
                                 validateFormPropertyName={'price'}
                                 isFieldValid={this.fieldValid('price')}
                        />

                        {/*<ComboBox label={'Stawka VAT'} errorMessage={'Jednostka miary ZLA!!!!'}/>*/}

                        {/*<Spinner label={'Ilość sztuk w opakowaniu'}*/}
                        {/*         errorMessage={'Cena nie może być mniejsza lub równa zero'}*/}
                        {/*         validation={numberBiggerThanZero}/>*/}

                        {/*<Spinner label={'Waga [kg]'} errorMessage={'Cena nie może być mniejsza lub równa zero'}*/}
                        {/*         validation={numberBiggerThanZero}/>*/}

                        {/*<ComboBox label={'Jednostka miary'} errorMessage={'Jednostka miary ZLA!!!!'}/>*/}


                    </form>}


                </section>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        units: state.additionalTables.unitsOfMeasurement,
        taxRates: state.additionalTables.taxRates
    };
}


ItemDetailsPage.propTypes = {
    match: PropTypes.object,
    products: PropTypes.object
}

export default connect(mapStateToProps)(ItemDetailsPage);

//     unitsOfMeasurement: 'szt',
//     price: 12.45,
//     piecesInPackage: 5,
//     weightInKG: .35,
