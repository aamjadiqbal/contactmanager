import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from './Context'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Contact extends Component {
    state = {
        showing: false
    }
    clickHandler = () => {
        this.setState({
            showing: !this.state.showing
        })
    }
    onDeleteHandler = (id, dispatch) => {
        axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
         .then(resp => dispatch({type: 'DELETE_CONTACT', payload: id}))
    }
  
    render() {
        const {id, name, email, phone} = this.props.contact
       
        return (
            <Consumer>
                {value => {
                    const dispatch = value.dispatch
                    return(
                    <div className='card card-body mb-3'>
                        <h4>{name}{'  '}
                            <i className='icon-caret-down' 
                                onClick={this.clickHandler}
                                style={{cursor: 'pointer'}}/>
                            <i className='icon-remove'
                               style={{cursor: 'pointer', color: 'red', float: 'right', margin: '5px'}}
                               onClick={() => this.onDeleteHandler(id, dispatch)}/>
                            <Link to={'/editcontact/'+id}>
                                <i className='icon-edit'
                                    style={{cursor: 'pointer', float: 'right', margin: '5px', color: 'black'}}/>
                            </Link>
                            
                        </h4>
                        {this.state.showing ? 
                             <ul className='list-group'>
                                <li className='list-group-item'>Email: {email}</li>
                                <li className='list-group-item'>Phone: {phone}</li>
                            </ul>: null}     
                    </div>
                    )
                } }
                
            </Consumer>
                        
                    )          
    }
}
Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}
export default Contact