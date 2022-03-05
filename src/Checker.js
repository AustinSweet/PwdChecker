import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './Checker.css';
class Checker extends Component{

    constructor(props){
        super(props);
        this.state = {
            entropyValue: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.calculateStrength(event.target.value);
    }

    calculateStrength(pwd){
        let len = pwd.length;
        let chars = [...pwd];
        let uniqueChars = new Set(chars);
        let eVal = len * Math.log(uniqueChars.size) / Math.log(2);
        this.setState({entropyValue: eVal});
    }

    render(){
        let daysCalc = (Math.pow(2, this.state.entropyValue) / 1000000) / 86400;
        let daysToCrack = daysCalc < 1 ? "< 1" : daysCalc.toFixed(0);
        return(
        <>
        <div className='pwd-form'>
        <Form onChange={this.handleChange}>
            <Form.Control
            type="text"
            id="passwordField"
            autoComplete='off'
            placeholder='Enter Password'></Form.Control>
        </Form>
        </div>
        <div className='results'>
            {this.state.entropyValue > 0.1 ? (<div>
                <hr></hr>
                <div>
                    Your password contains 
                </div>
                <div>{this.state.entropyValue.toFixed(9)}</div>
                <div>
                    bits of Entropy
                </div>
                <hr></hr>
                <div>
                    If an attacker made 1 million guesses a second, it would take
                </div>
                <div>{daysToCrack}</div>
                <div>
                    days before they would be guaranteed to crack this password.
                </div>
                <hr></hr>
                <div>
                    (Real-world situations differ from these controlled calculations)
                </div>

            </div>) :  (<div></div>)}
        </div>
        </>)
    }

}

export default Checker;