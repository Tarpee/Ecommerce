import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './components/Body'
import Interface from './components/Interface'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'


import './App.css';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
  
  <Navbar/>

  <Router>
  <Switch>
                  <div className="App2">
                      <div className="Interface">  
                         <Interface/>
                           <div>
                             &nbsp;
                           <br/>
                            <Link to="/Page1">Page1</Link> 
                            <br/>
                            &nbsp;
                            <Link to="/Page2">Page2</Link>
                            <br/>
                            &nbsp;
                            <Link to="/Page3">Page3</Link>
                          <h3> <button> <Link to="/Checkout">Checkout</Link> </button></h3>
                           </div>
                       </div>
                     <div className="Body">
                          <Body/>
                            <Route  exact path="/Page1" component={Page1}/>
                            <Route path="/Page2" component={Page2} /> 
                            <Route path="/Page3" component={Page3} />
                            
                           <Route path="/Checkout" component={Checkout} />
                    </div> 
                  </div>  

   </Switch>
   </Router>

   <Footer/>
  
  </div>
   
  );
}

export default App;
