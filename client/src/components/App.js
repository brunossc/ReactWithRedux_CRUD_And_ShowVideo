import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import EditStream from './Streams/Edit';
import CreateStream from './Streams/Create';
import DeleteStream from './Streams/Delete';
import ListStream from './Streams/List';
import ShowStream from './Streams/Show';
import Menu from './Menu';
import history from '../history';

const App = () => {
    return (
        <div className="ui conteiner">

            <Router history={history}>
                <div>
                    <Menu />
                    <Switch>
                        <Route path='/streams' exact component={ListStream} />
                        <Route path='/streams/create' exact component={CreateStream} />
                        <Route path='/streams/Edit/:id' exact component={EditStream} />
                        <Route path='/streams/Delete/:id' exact component={DeleteStream} />
                        <Route path='/streams/:id' exact component={ShowStream} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;