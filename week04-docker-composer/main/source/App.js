import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Rang from './rang';
import GetIgnore from './getIgnore';
import GetAllBranches from './getBranches';
//import GetBranches from './GetBranches';
import YouRangroutetester from './youRangroutetester';
import SelectRepo from './SelectRepo';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/rang">
                                    {' '}
                                    Get You Rang from system-environment
                                </Link>
                            </li>
                            <li>
                                <Link to="/getIgnore">Get Ignore</Link>
                            </li>
                            <li>
                                <Link to="/getBranches">Get All Branches</Link>
                            </li>
                            <li>
                                <Link to="/SelectRepo">select repo</Link>
                            </li>
                            <li>
                                <Link to="/youRangroutetester">
                                    Get You Rang from routeTester
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/rang">
                            <Rang />
                        </Route>
                        <Route path="/getIgnore">
                            <GetIgnore />
                        </Route>
                        <Route path="/getBranches">
                            <GetAllBranches />
                        </Route>
                        <Route path="/youRangroutetester">
                            <YouRangroutetester />
                        </Route>
                        <Route path="/SelectRepo">
                            <SelectRepo />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
