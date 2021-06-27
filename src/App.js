import NavBar from './navBar'
import Home from './Home'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails'
import About from './About';




function App() {

 
  return (
    <Router>
      
    <div className="App">

      <NavBar/>
      <div className="content">

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/create">
            <Create/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>


          <Route path="/blog/:id">
            <BlogDetails/>
          </Route>


        </Switch>

      </div>
      
    </div>

    </Router>
  );
}

export default App;
