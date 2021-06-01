import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inner: [
                {
                    id: 1,
                    icon: 'fa fa-check-square',
                    text: 'Completing projects on time & Following budget guidelines'
                },
                {
                    id: 2,
                    icon: 'fa fa-check-square',
                    text: 'Elevated quality of workmanship'
                },
                {
                    id: 3,
                    icon: 'fa fa-check-square',
                    text: 'Meeting diverse supplier requirements'
                },
                {
                    id: 4,
                    icon: 'fa fa-check-square',
                    text: 'Implementing appropriate safety precautions and procedures'
                },
            ]
        }
    }
    
    render() {
        return (
            <div className="row-about">
                <div className="container-fluid">
                    <div className="row equalize sm-equalize-auto">
                        <div className="col-md-6 half-background style-1" style={{padding: '45px 0'}}>
                            <img src="../../assets/img/slider/bg-img.jpg" alt="about-img" />
                        </div>
                        <div className="col-md-6 bg-light-grey" style={{padding: '45px 0'}}>
                            <div className="themesflat-spacer clearfix" data-desktop={64} data-mobile={60} data-smobile={60} />
                            <div className="themesflat-content-box clearfix" data-margin="0 25% 0 4.5%" data-mobilemargin="0 0 0 4.5%">
                                <div className="themesflat-headings style-1 clearfix">
                                    <h2 className="heading">WELCOME TO DSA</h2>
                                    <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />                                               
                                    <p className="sub-heading margin-top-30">Development Services of America, Inc., (DSA) is a subsidiary of Services Group of America and is a  commercial real estate development and asset management company. The company was founded in 1986 and was incorporated in 1988.  Since its founding, DSA has operated in over 23 Western and mid-Western States. DSA headquarters in Scottsdale, AZ, and maintains secondary offices in Seattle, WA.</p>
                                </div>
                                <div className="themesflat-spacer clearfix" data-desktop={26} data-mobile={35} data-smobile={35} />
                                {/* <div className="content-list">
                                    <div className="themesflat-list has-icon style-1 icon-left clearfix">
                                        <div className="inner">
                                            {
                                                this.state.inner.map(data => (
                                                    <span className="item" key={data.id}>
                                                        <span className="icon"><i className={data.icon} /></span>
                                                        <span className="text">{data.text}</span>
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div> */}
                                <div className="themesflat-spacer clearfix" data-desktop={42} data-mobile={35} data-smobile={35} />
                                <div className="elm-button">
                                    <Link to="#" className="themesflat-button bg-white">GET IN TOUCH</Link>
                                </div>
                            </div>
                            <div className="themesflat-spacer clearfix" data-desktop={75} data-mobile={60} data-smobile={60} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;