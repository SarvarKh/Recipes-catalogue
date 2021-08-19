import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import App from './components/App';
import DetailMeal from './components/DetailMeal';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Routes = () => (
  <BrowserRouter>
    <div className="navbar">
      <Link to="/" className="logo" />
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
