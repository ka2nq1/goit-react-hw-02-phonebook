import React, { Component } from 'react';
import ContactForm from '../contactForm/ContactForm';
import ContactList from '../contactList/ContactList';
import FIlter from '../filter/Filter';


export default class App extends Component {
    state = {
        contacts: [],
        name: ''
    };

    render() {
        return (
            <>
                <ContactForm />
                <FIlter/>
                <ContactList />
            </>
        )
    }
}