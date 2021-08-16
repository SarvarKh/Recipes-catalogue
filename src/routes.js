import App from './components/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Detail from './containers/Detail';
import DetailMeal from './components/DetailMeal';
import Error from './components/Error';
import Navbar from './components/Navbar';
import * as styles from './style/components.module.css';

const Routes = () => (
  <BrowserRouter>
    <div className={styles.navContainer}>
      <h1 className={styles.logo}>Inspiring Recipes Catalogue</h1>
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

