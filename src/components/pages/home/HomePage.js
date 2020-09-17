import React, {Component} from 'react';
import './HomePage.scss'
import img1 from '../../../images/logo1.jpg';
import img2 from '../../../images/logo2.jpg';
import img3 from '../../../images/logo3.jpg';
import img4 from '../../../images/logo4.jpg';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {changeJumbotronVisibility, toggleJumbotronVisibility} from '../../../reduxSettings/actions/appStateActions';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.changeJumbotronVisibility = this.changeJumbotronVisibility.bind(this);
    }

    componentDidMount() {
        this.props.toggleJumbotronVisibility();
    }

    componentWillUnmount() {
        this.props.toggleJumbotronVisibility();
    }

    changeJumbotronVisibility() {
        this.props.toggleJumbotronVisibility();
    }

    render() {
        return (
            <React.Fragment>
                <section className="app-content">
                    <article className="description-section">
                        <div className="description-panel">
                            <h2>We&#39;re global</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad aliquam amet
                                atque,
                                blanditiis, eius enim fuga ipsa ipsam molestias nam nesciunt obcaecati officiis rem sed
                                sunt
                                ut,
                                vel?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda, autem consequatur
                                cupiditate
                                debitis dolore impedit ipsam labore laboriosam necessitatibus non nostrum quae quod
                                recusandae sapiente
                                sit tempora totam unde!</p>
                            <button className="rounded-button blue left">
                                Get Started
                            </button>
                        </div>
                        <div className="description-carousel"></div>
                    </article>
                    <article className="services-section">
                        <h2 className="services-title">
                            <span className="white">Awesome </span>
                            <span className="blue">Services</span>
                            <span className="description">Our experties area</span></h2>
                        <div>
                            <div className="services-panel">
                                <h3>Interface Design</h3>
                                <p>laboris nisi ut aliquip ex ea in commodo consequat. Duis aute nisi eprehenderit in
                                    voluptate velit es laboris ut.</p>
                            </div>
                            <div className="services-panel">
                                <h3>iOS Development</h3>
                                <p>laboris nisi ut aliquip ex ea in commodo consequat. Duis aute nisi eprehenderit in
                                    voluptate velit es laboris ut.</p>
                            </div>
                            <div className="services-panel">
                                <h3>Print Design</h3>
                                <p>laboris nisi ut aliquip ex ea in commodo consequat. Duis aute nisi eprehenderit in
                                    voluptate velit es laboris ut.</p>
                            </div>
                        </div>
                    </article>
                    <article className="advertisement-section">
                        <h2 className="advertisement-title">
                            <span className="blue">Productive </span><br/>
                            <span className="white">We always maintain best quality of our code</span>
                        </h2>
                        <div className="advertisement-text">
                            <p className="adv-txt">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
                                dolorem
                                expedita id ipsum iste non obcaecati officia placeat, sed, sint.
                                Fugit illum quidem quo rem saepe veniam voluptatem.
                            </p>
                            <button className="rounded-button blue">Learn more</button>
                        </div>

                    </article>
                    <article className="subscribe-section">
                        <h2 className="subscribe-title">
                            <span className="white">Subscribe</span>
                            <span className="blue"> to our newsletter</span>
                            <span className="description">Subscribe, We&#39;ll send you our hot offers</span>
                        </h2>
                        <form className="subscribe-form">
                            <input className="txt-input" type="text" placeholder="Enter your name"/>
                            <input className="txt-input" type="text" placeholder="Enter your e-mail"/>
                            <button className="rounded-button blue">Subscribe</button>
                        </form>
                    </article>
                    <article className="brands-section">
                        <h2 className="brands-title">
                            <span className="blue">Brands</span><span className="white"> we work with</span>
                            <div className="brands-images">
                                <img className="brand-img" src={img1} alt="brand1"/>
                                <img className="brand-img" src={img2} alt="brand2"/>
                                <img className="brand-img" src={img3} alt="brand3"/>
                                <img className="brand-img" src={img4} alt="brand4"/>
                            </div>
                        </h2>
                    </article>
                </section>
            </React.Fragment>
        )
    }
}

HomePage.propTypes = {
    showJumbotron: PropTypes.bool,
    toggleJumbotronVisibility: PropTypes.func.isRequired,
    changeJumbotronVisibility: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        showJumbotron: state.appState.showApplicationJumbotron
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleJumbotronVisibility: bindActionCreators(toggleJumbotronVisibility, dispatch),
        changeJumbotronVisibility: bindActionCreators(changeJumbotronVisibility, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

