import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import About from './About';
import BlogsPage from './BlogsPage';
import Counter from './Counter';
import BMICalculator from './BMICalculator';
import Calculator from './Calculator';


function App() {
  
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/calculator">
              <Calculator/>
            </Route>
            <Route path="/bmicalculator">
              <BMICalculator/>
            </Route>
            <Route path="/counter">
              <Counter/>
            </Route>
            <Route path="/blogspage">
              <BlogsPage/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


// Is Switch available in react router dom v6?
// In React Router version 6, the <Switch> component has been deprecated and replaced with the <Routes> component. 

