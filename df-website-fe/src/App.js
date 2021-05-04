import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './pages/about';
import Projects from './pages/projects';
import Home from './pages/home';
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
