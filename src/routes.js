import App from './components/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Detail from './containers/Detail';
import DetailMeal from './components/DetailMeal';
import Error from './components/Error';
import Navbar from './components/Navbar';
import * as styles from './style/components.module.css';
import { Link } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <div className={styles.navContainer}>
      <Link to="/" className={styles.logo}></Link>
      <Navbar />
    </div>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/containers/Detail" component={Detail} />
      <Route path="/components/DetailMeal" component={DetailMeal} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

