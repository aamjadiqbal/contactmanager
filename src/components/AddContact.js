import React, { Component } from 'react'
import { Consumer } from './Context'
import axios from 'axios'
import TextInputGroup from './TextInputGroup';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChangeInput = (event) => {
        const { name, value } = event.target
        this.setState({
            [name] : value
        })
    }
    onSubmitForm = (dispatch, event) => {
        event.preventDefault();
        
        const { name, email, phone} = this.state

        if(name === '') {
            this.setState({ errors: { name: 'Name is required'}});
            return;
        }
        if(email === '') {
            this.setState({ errors: { email: 'Email is required'}});
            return;
        }
        if(phone === '') {
            this.setState({ errors: { phone: 'Phone is required'}});
            return;
        }
        const newContact = {
          
            name,
            email,
            phone
            
        }
        axios.post('https://jsonplaceholder.typicode.com/users', newContact)
            .then(resp => dispatch({
                type: 'ADD_CONTACT', 
                payload: resp.data
            }))
        
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })  
        this.props.history.push('/')  
    }

    render() {
        const { name, email, phone, errors } = this.state
        return (
            <Consumer>
                {value => {
                    const dispatch = value.dispatch
                    return (
                        <div className='card mb-3'>
                            <div className='card-header'>
                                Add Contact
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.onSubmitForm.bind(this, dispatch)}>
                                    <TextInputGroup 
                                        label='Name'
                                        placeholder='Enter Name'
                                        name='name'
                                        value={name}
                                        onChangeInput={this.onChangeInput}
                                        error = {errors.name}
                                    />
                                    
                                    <TextInputGroup 
                                        label='Email'
                                        placeholder='Email...'
                                        name='email'
                                        value={email}
                                        onChangeInput={this.onChangeInput}
                                        type='email'
                                        error = {errors.email}
                                    />
                                    <TextInputGroup 
                                        label='Phone'
                                        placeholder='Enter Phone'
                                        name='phone'
                                        value={phone}
                                        onChangeInput={this.onChangeInput}
                                        error = {errors.phone}
                                    />
                                    <input 
                                        type='submit'
                                        value= 'Add Contact'
                                        className= 'btn btn-light btn-block'
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
        
    }
}

export default AddContact