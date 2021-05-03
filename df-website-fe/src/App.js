import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
