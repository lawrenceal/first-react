import React from 'react';
import { render } from 'react-dom';
//HashRouter
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './app';
import HelloWorldSimple from "./componentSimple";
import HelloWorld from "./component";
import State from './state';
import Ref from './ref';
import ComponentLifecycle from './componentLifecycle';
import ComponentInteract from './componentInteractParent';
import AsyncComponent from './asyncCompnent';
import HigherOrder from './higherOrderComponentBas';
import UrlParam from './reactRouter/urlParam';
import InnerRouter from './reactRouter/innerRouter';
import ProductFilter from './productFilter';
import Form from './form';
import Auth from './reactRouter/auth';
import RouterSwitch from './reactRouter/routerSwitch';
import RouterConfig from './reactRouter/routerConfig';
import './style/index.css';

let names = ['lawrence', 'kitty', 'tom'];
let arrElement = [ <h1 key={1}>First React APP</h1>, <h2 key={2}>hello world</h2> ];

const Home = () => (
    <div>
    <h2>首页</h2>
    {arrElement}
    {names.map((item, i) => { return <div key={i}>{item} say: hello</div>})}
    </div>
);

const SimpleComponent = () => (<HelloWorldSimple name="slice" />);

const InheritComponent = () => (<HelloWorld name="larry"/>);

render(
    (<Router basename="/react" keyLength={12}>
        <App>
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/simpleComponent" component={ SimpleComponent }/>
                <Route path="/inheritComponent" component={ InheritComponent }/>
                <Route path="/state" component={ State }/>
                <Route path="/ref" component={ Ref }/>
                <Route path="/componentLifecycle" component={ ComponentLifecycle }/>
                <Route path="/componentInteract" component={ ComponentInteract }/>
                <Route path="/asyncComponent" component={ AsyncComponent }/>
                <Route path="/higherOrder" component={ HigherOrder }/>
                <Route path="/productFilter" component={ ProductFilter }/>
                <Route path="/form" component={ Form }/>
                <Route path="/urlParam/:id" component={ UrlParam }/>
                <Route path="/innerRoute" component={ InnerRouter }/>
                <Route path="/auth" component={ Auth }/>
                <Route path="/routerSwitch" component={ RouterSwitch }/>
                <Route path="/routerConfig" component={ RouterConfig }/>
                <Route render={ ({location}) => (<h3>404-无法匹配到路径{location.pathname}</h3>)}/>
            </Switch>
        </App>
    </Router>),
    document.getElementById('root')
);


