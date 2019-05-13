import React from 'react';
import Home from './containers/Home';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="default" component={Home}/>
            </Switch>
        </BrowserRouter>
        );
    }
}

export default App