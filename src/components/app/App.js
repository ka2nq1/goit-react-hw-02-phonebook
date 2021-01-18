import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../contactForm/ContactForm';
import Filter from '../filter/Filter';
import ContactList from '../contactList/ContactList';
import styles from './App.module.css';


export default class App extends Component {
    state = {
        contacts: [],
        filter: ''
    };

    changeFilter = filter => {
        this.setState({ filter })
    };
    
    
    addContact = (person) => {

        const contact = {
            id: uuidv4(),
            ...person
        };
        this.setState(prevState => {
            return {
                contacts: [...prevState.contacts, contact]
            }
        })
    };
    
    removeContact = contactId => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(({ id }) => id !== contactId)
            }
        })
    }

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;
    
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };
    
    render() {
        const { contacts, filter } = this.state;
        const visibleContacts = this.getVisibleContacts();
        
        return (
            <div className={styles.container}>
                <h1 className={styles.tytle}>Phonebook</h1>
                <ContactForm addContact={this.addContact} contacts={contacts}/>
                <h2 className={styles.tytle}>Contacts</h2>
                <Filter filter={filter} onChange={this.changeFilter} />
                {visibleContacts.length > 0 && (
                    <ContactList contacts={visibleContacts} onRemoveContact={this.removeContact} />
                )}          
            </div>
        )
    }
}