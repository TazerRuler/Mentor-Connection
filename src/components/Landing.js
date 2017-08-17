
// absolute imports
import React from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import Auth0Lock from 'auth0-lock';
import Youtube from './Youtube';
import Mentor from '../../public/images/Mentor.jpg'
import beMentor from '../../public/images/be-a-mentor.jpg'
import '../../public/css/mentorConnection.css';
import '../../public/css/bootstrap.css';
import '../../public/font-awesome/css/font-awesome.min.css';
import {Grid, Row, Col} from 'react-bootstrap';
import MenteeModal from './MenteeModal';
import MentorModal from './MentorModal';
import UserAuth from './UserAuth';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        console.log("toggle");
        this.setState({
            authModalOpen:  !this.state.authModalOpen
        });
    }

    render() {
        return (
            <div>

                <header id="top" className="header">
                    <div className="text-vertical-center">
                        <br/>
                        <img src={Mentor} className="img-style" alt={"Mentor"} />
                       <button className="mentor-img-left" onClick={this.toggleModal} />
                       <button className="mentor-img-right" onClick={this.toggleModal} />
                    </div>
                </header>

                <section id="about" className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                                <p className="lead">This theme features some wonderful photography courtesy of <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a>.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="services bg-primary">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-10 col-lg-offset-1">
                                <h2>Our Services</h2>
                                <hr className="small"/>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="service-item">
                                            <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-cloud fa-stack-1x text-primary"></i>
                                        </span>
                                            <h4>
                                                <strong>Service Name</strong>
                                            </h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <a href="#" className="btn btn-dark">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="service-item">
                                            <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-compass fa-stack-1x text-primary"></i>
                                        </span>
                                            <h4>
                                                <strong>Service Name</strong>
                                            </h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <a href="#" className="btn btn-dark">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="service-item">
                                            <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-flask fa-stack-1x text-primary"></i>
                                        </span>
                                            <h4>
                                                <strong>Service Name</strong>
                                            </h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <a href="#" className="btn btn-dark">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="service-item">
                                            <span className="fa-stack fa-4x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-shield fa-stack-1x text-primary"></i>
                                        </span>
                                            <h4>
                                                <strong>Service Name</strong>
                                            </h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <a href="#" className="btn btn-dark">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div>
                    <img src={beMentor} className="img-style" alt={"beMentor"} />
                </div>

                

                <aside className="call-to-action bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <Youtube />
                            </div>
                        </div>
                    </div>
                </aside>

                <section id="contact" className="map">
                    <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Mentor Connection,+Inc.,+320+East+9th+Street,+Charlotte,+NC&amp;aq=0&amp;oq=mentor&amp;sll=35.228354,-80.835211&amp;ie=UTF8&amp;hq=Mentor Connection,+Inc.,+320+East+9th+Street,+Charlotte,+NC&amp;t=m&amp;z=28202&amp;iwloc=A&amp;output=embed"></iframe>
                    <br />
                    <small>
                        <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Mentor Connection,+Inc.,+320+East+9th+Street,+Charlotte,+NC&amp;aq=0&amp;oq=mentor&amp;sll=35.228354,-80.835211&amp;ie=UTF8&amp;hq=Mentor Connection,+Inc.,+320+East+9th+Street,+Charlotte,+NC&amp;t=m&amp;z=28202&amp;iwloc=A"></a>
                    </small>
                </section>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-lg-offset-1 text-center">
                                <h4><strong>Mentor Connection</strong>
                                </h4>
                                <p>320 E. 9th Street, Charlotte, NC 28202
                                    <br/>Charlotte, NC 28202</p>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-phone fa-fw"></i> (123) 456-7890</li>
                                    <li><i className="fa fa-envelope-o fa-fw"></i> <a href="mailto:name@example.com">name@sample.com</a>
                                    </li>
                                </ul>
                                <br/>
                                <ul className="list-inline">
                                    <li>
                                        <a href="#"><i className="fa fa-facebook fa-fw fa-3x"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-twitter fa-fw fa-3x"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-dribbble fa-fw fa-3x"></i></a>
                                    </li>
                                </ul>
                                <hr className="small"/>
                                <p className="text-muted">Copyright &copy; 2017</p>
                            </div>
                        </div>
                    </div>
                    <a id="to-top" href="#top" className="btn btn-dark btn-lg"><i className="fa fa-chevron-up fa-fw fa-1x"></i></a>
                </footer>

                <MenteeModal
                    isOpen={this.state.authModalOpen}
                    toggleModal={this.toggleModal}
                    setAuth={this.props.setAuth}
                    isAutth={this.props.isAuthenticated} />

               

            </div>
        );
    }
}

export default Landing;
