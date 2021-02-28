import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Project from "./components/Project";
import SingleProject from "./components/SingleProject";
import About from "./components/About";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={Blog} path='/blog'/>
        <Route component={SingleProject} path='/project/:slug'/>
        <Route component={Project} path='/project'/>
        <Route component={About} path='/about'/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
