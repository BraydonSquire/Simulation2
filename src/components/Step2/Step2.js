import React, {Component} from 'react';

export default class Step2 extends Component {
    render() {
        return(
            <div className="step2_main_container">
                <div>
                    <h2>Address</h2>
                    <input />

                    <h2>City</h2>
                    <input />

                    <h2>State</h2>
                    <input />

                    <h2>Zip</h2>
                    <input />
                </div>
                <div>
                    <button>Previous Step</button>
                    <button>Next Step</button>
                </div>
            </div>
        )
    }
}