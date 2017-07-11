import React from 'react';
import {Link} from 'react-router-dom';

const App = (props) => {
    return (
        <div>
            <ul className="url-list">
                <li><Link to="/">index</Link></li>
                <li><Link to="/simpleComponent">simple component</Link></li>
                <li><Link to="/inheritComponent">inherit component</Link></li>
                <li><Link to="/state">state</Link></li>
                <li><Link to="/ref">ref</Link></li>
                <li><Link to="/componentLifecycle">ComponentLifecycle</Link></li>
                <li><Link to="/componentInteract">ComponentInteract</Link></li>
                <li><Link to="/asyncComponent">AsyncComponent</Link></li>
                <li><Link to="/higherOrder">HigherOrder</Link></li>
                <li><Link to="/productFilter">product filter</Link></li>
                <li><Link to="/form">form</Link></li>
                <li>
                    <ul>
                        <li><Link to="/urlParam/1">UrlParam</Link></li>
                        <li><Link to="/innerRoute">Inner Route</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/auth">Auth</Link></li>
                    </ul>
                </li>
            </ul>
            { props.children }
        </div>
    );
};

export default App;