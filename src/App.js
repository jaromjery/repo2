import React from 'react';
import { Route, Switch} from "react-router-dom";

import Login from './Login'; 
import SignUp from './SignUp';
import Profile from './Profile';

function App() {
  return (
   
      <div>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        
        <Route path="/profile" component={Profile} />
      </Switch>

      </div>
    
  );
}

export default App;