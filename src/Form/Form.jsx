import React, { Component } from "react";
import styles from './Form.module.css';
import "react-form-next/index.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedForm: null
        };
    }

    handleSubmit(event) {
        alert('Submitted Succeed!');
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <section className={styles.section}>
                    <label>
                        Name:
                        <input type="text" required/>
                    </label>
                </section>
                <section className={styles.section}>
                    <label>
                        Email:
                        <input type="email" required/>
                    </label>
                </section>
                <section className={styles.section}>
                    <label>
                        Password:
                        <input type="password" required/>
                    </label>
                </section>
                <section className={styles.section}>
                    <label>
                        Major:
                        <input type="text" required/>
                    </label>
                </section>
                <section className={styles.section}>
                    <label>
                        School:
                        <input type="text" required/>
                    </label>
                </section>

                <div className={styles.checkbox}>
                    <label>
                        Please choose your gender:
                        <input type="checkbox" id="female" />
                        <label for="female">Female</label>
                        <input type="checkbox" id="male"/>
                        <label for="male">Male</label>
                        <input type="checkbox" id="none"/>
                        <label for="none">None</label>
                    </label>
                </div>

                <div className={styles.dropdown}>
                    <label>
                        Please choose your country:
                        <select>
                            <option value="United States">United States</option>
                            <option value="China">China</option>
                            <option value="India">India</option>
                            <option value="Korean">Korean</option>
                        </select>
                    </label>
                </div>

                <div className={styles.dropdown}>
                    <label>
                        Please choose your hobby:
                        <select>
                            <option value="Study">Study</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Others">Others</option>
                        </select>
                    </label>
                </div>
                <button className={styles.button}>Submit</button>
            </form>
        );
    }
}
