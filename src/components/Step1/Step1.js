import React, {Component} from 'react';

export default class Step1 extends Component {
    render() {
        return(
            <div className="wizard_step_container">
                <div className="wizard_step_header_container">
                    <span>Add new listing</span>
                    <button>Cancel</button>
                </div>
                <div className="wizard_stepHighlight_container">
                    <span>Step 1</span>
                    <div className="stepHighlight_container">
                        <img />
                        <img />
                        <img />
                        <img />
                        <img />
                    </div>
                </div>
                <div className="step_contanier">
                    <div className="step1_name_contanier">
                        <span>Property Name</span>
                    </div>
                    <input className="step1_propName_input" />
                        <div className="step1_propDescription_container">
                            <span>Property Description</span>
                    </div>
                    <textarea className="step1_propDescription_textarea"></textarea>
                    <div className="step1_btn_container">
                        <button className="next_step_btn">Next Step</button>
                    </div>
                </div>
        </div>
        )
    }
}