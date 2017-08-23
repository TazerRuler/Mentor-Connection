import React from 'react'; //import React, { Component } from 'react';//
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './header';
import Home from './Home';

import NodeQuiz from '../quizzes/tornode';
import CSharpQuiz from '../quizzes/torc';
import MongoQuiz from '../quizzes/tormongo';

import '../../public/css/mentorConnection.css';
import '../../public/css/bootstrap.css';
import '../../public/font-awesome/css/font-awesome.min.css';

class MentorModal extends React.Component {      
    constructor(props)  {
        super(props);
        this.state = {
            showQuiz: false,
            chosenTopic: null
        };
        this.chooseNode = this.chooseNode.bind(this);
        this.chooseMongo = this.chooseMongo.bind(this);
        this.chooseCSharp = this.chooseCSharp.bind(this);
        this.displayQuiz = this.displayQuiz.bind(this);
    }

    chooseNode() {
        this.setState({
            chosenTopic: 'NODE'
        });
        this.displayQuiz();
    }

    chooseMongo(){
        this.setState({
            chosenTopic: 'MONGO'
        });
        this.displayQuiz();
    }

    chooseCSharp() {
        this.setState({
            chosenTopic: 'CSharp'
        });
        this.displayQuiz();
    }

    displayQuiz() {
        this.setState({
            showQuiz: true
        });
    }

    renderChoices() {
        return(
            <div>
                Choices
                <br/>
                <button className="btn btn-dark" onClick={this.chooseNode}>
                    Node
                </button>
                <button className="btn btn-dark">
                    Mongo
                </button>
                <button className="btn btn-dark">
                    C#
                </button>
            </div>                     
        );
    }    

    renderQuiz() {
        if (this.state.chosenTopic === 'NODE') {
            return (
                <NodeQuiz 
                    finishQuiz={this.props.finishQuiz} />
            );
        } else if (this.state.chosenTopic === 'MONGO') {
            return (
                <MongoQuiz 
                    finishQuiz={this.props.finishQuiz} />
            );
        } else if (this.state.chosenTopic === 'CSharp') {
            return (
                <CSharpQuiz
                    finishQuiz={this.props.finishQuiz} />
            );
        }
    }  
        

    render(){
        // two variables that just hold html
        // this html is returned by the methods above
        var choices = this.renderChoices();
        var quiz = this.renderQuiz();

        return (
          <div>
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.toggleModal}
                contentLabel="Topic Quizzes">
                {/* now we have a conditional render! */}
                {/* isThisValueTrue ? ifYesDoThis : OtherwiseDoThis */}
                {/* if this.props.isAuth, render quiz, otherwise unAuth */}
                {this.state.showQuiz ? quiz : choices}
                <button className="btn btn-dark" onClick={this.props.close}>Back</button>
            </Modal>

            
          </div>
        );
    }
}

export default MentorModal;