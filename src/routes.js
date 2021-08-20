import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import App from './components/container/App';
import DetailMeal from './components/container/DetailMeal';
import Error from './components/presentation/Error';
import Navbar from './components/presentation/Navbar';
import Footer from './components/presentation/Footer';

const Routes = () => (
  <BrowserRouter>
    <div className="navbar">
      <Link to="/" className="logo" />
      <h2 className="quote">Good food is good mood</h2>
      <Navbar />
    </div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/components/DetailMeal" component={DetailMeal} />
      <Route component={Error} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
