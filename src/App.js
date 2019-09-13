import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './components/Context'
import AddContact from './components/AddContact';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About';
import NotFound from './components/NotFound';
import Test from './components/Test/Test';
import EditContact from './components/EditContact';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">        
            <Header banner='Contact Mangerr'/>
              <div className='container'>
                <Switch>
                   <Route path='/' exact component={Contacts}/>
                   <Route path='/about' exact component={About} />
                   <Route path='/addcontact' exact component={AddContact} />
                   <Route path='/test' component={Test}/>
                   <Route path='/editcontact/:id' component={EditContact} />
                   <Route component={NotFound}/>
                </Switch>
              </div>
      </div>  
        </BrowserRouter>
      </Provider>     
     
    )
  } 
}

export default App;
 
