
import './App.css';
import {ProvideAuth} from "./useAuth";
import {Route, Router, Switch} from "react-router";
import {createBrowserHistory} from "history";
import {LoginPage} from "./components/LoginPage";
import {Home} from "./components/Home";
import 'bootstrap/dist/css/bootstrap.css'
import {Header} from "./components/Header";
import {useState} from "react";

import {Alert} from "./components/Alerts";
import {Suitability} from "./components/Suitability";

const browserHistory = createBrowserHistory();

function App() {
  const [show, setShow] = useState({isShow:false, text:"", title:""});
    const handleClose = () => setShow((state,props) => setShow({...state, isShow: false}));
    const handleShow = (message, tit) => setShow({isShow: true, text: message, title: tit});
  return (
      <ProvideAuth>
          <Router  history={browserHistory} >
              <Header/>
              <Alert show={show} handleClose={handleClose}/>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/login">
                      <LoginPage toUrl="/api/lodger/" handlerShow={handleShow}/>
                  </Route>
                  <Route path="/suitability" >
                      <Suitability handleShow={handleShow}/>
                  </Route>
              </Switch>
          </Router>
      </ProvideAuth>
  );
}

export default App;
