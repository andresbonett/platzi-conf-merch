import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Success from '../containers/Success';
import Payment from '../containers/Payment';
import Information from '../containers/Information';
import Checkout from '../containers/Checkout';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout/success" component={Success} />
          <Route exact path="/checkout/payment" component={Payment} />
          <Route exact path="/checkout/information" component={Information} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
