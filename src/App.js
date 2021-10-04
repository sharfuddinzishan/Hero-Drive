import './App.css';
import Header from './component/Header/Header';
import Services from './component/Services/Services';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import Team from './component/Team/Team';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Enrollment from './component/Enrollment/Enrollment';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Services type="home_page"></Services>
          </Route>
          <Route exact path="/services">
            <Services type="services_page"></Services>
          </Route>
          <Route exact path="/services/:serviceID">
            <ServiceDetails />
          </Route>
          <Route exact path="/team">
            <Team></Team>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/enrollment">
            <Enrollment></Enrollment>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
