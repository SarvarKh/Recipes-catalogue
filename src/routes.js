import App from './components/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailMeal from './components/DetailMeal';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Link } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <div className="navbar">
      <Link to="/" className="logo"></Link>
      <h2 className="quote">Good food is good mood</h2>
      <Navbar />
    </div>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/components/DetailMeal" component={DetailMeal} />
      <Route component={Error} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;

