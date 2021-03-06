import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Index from './pages/index';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Index} ></Route>
            </Switch>
        </BrowserRouter>
    );
}
