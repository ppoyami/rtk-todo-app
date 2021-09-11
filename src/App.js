import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppLayout from '@/components/layouts/AppLayout';
import Header from '@/components/Header';

import Board from '@/pages/Board';
import Landing from '@/pages/Landing';
import Create from '@/pages/Create';

export default function App() {
  return (
    <AppLayout>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/board" component={Board} />
          <Route path="/create" component={Create} />
        </Switch>
      </Router>
    </AppLayout>
  );
}
