import React, { Component } from 'react';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
        const { name, value } = e.target;
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.props.contacts.find(contact => contact.name === this.state.name)) {
            alert(`${this.state.name} is already in contacts.`)
        } else {
            this.props.addContact({ name: this.state.name, number:this.state.number })
            this.setState({
                name: '',
                number: ''
            });
        }
    };

    render() {
        const { name, number } = this.state;
        return (
            <div className={styles.container}>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input className={styles.input} type='text' id='name' name='name' placeholder="Name Surname" value={name} onChange={this.handleChange} />
                    <label className={styles.label} htmlFor='number'>Number</label>
                    <input className={styles.input} type='text' id='number' name='number' placeholder="0667773377" value={number} onChange={this.handleChange} />
                    <button type="submit" className={styles.btn}>Add contact</button>
                </form>
            </div>
        )
    }
}