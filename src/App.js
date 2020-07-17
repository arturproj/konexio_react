import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AppElsy from './Exercices/AppElsy';


class App extends React.Component{



    render(){
        return (
        <Router>     
            <Switch> 
              <Route path="/">  
              {/* ./scr/Components/AppElsy.js */}
                <AppElsy />
              </Route>        
            </Switch>
        </Router>
        );
    }
}

export default App;