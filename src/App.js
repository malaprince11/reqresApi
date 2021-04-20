import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './Component/Navbar/Navbar';
import AddData from './Container/AddData/AddData';
import Home from './Container/Home/Home';

function App() {
  return (
    <div className="App">
    <h1>hello mala</h1>
    <Router>
    <NavBar />
    <Switch>
    <Route path="/" exact component={Home} ></Route>
    <Route path="/formulaire" component={AddData}></Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
