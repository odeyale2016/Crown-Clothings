import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
  
 //import Contact from './components/Contact'
 import Header from './components/layout/Header'
 import About from './components/layout/About'
 import NotFound from './components/layout/NotFound'
  
 import Contacts from './components/contacts/Contacts'
 import AddContact from './components/contacts/AddContact'
 import EditContact from './components/contacts/EditContact'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import store from './store'
//import './App.css'
//import HomePage from './components/pages/homepage/homepage.component.jsx';
 

function App() {
  return (
     <Provider store={store}>
    <Router>
    <div className="App" >
    <Header branding="Contact Manager" />
    <div className="container">
    <Switch>
      <Route  exact path="/" component={Contacts} />
      <Route  exact path="/about" component={About} />
      <Route  exact path="/contact/add" component={AddContact} />
      <Route  exact path="/contact/edit/:id" component={EditContact} />
      
      <Route component={NotFound} />
    </Switch>
    
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
