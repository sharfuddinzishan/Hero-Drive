import './App.css';
import Header from './component/Header/Header';
import Services from './component/Services/Services';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Enrollment from './component/Enrollment/Enrollment';
import Banner from './component/Banner/Banner';
import { createContext } from 'react';
import { useTeam } from './Hooks/useTeam';
import Teams from './component/Teams/Teams';
import { useCompany } from './Hooks/useCompany';

// Context Used To pass Company and Team Info To Components 
export const companyContext = createContext()

function App() {
  // Get All Team Members
  const [teams] = useTeam()
  // Get Company Details 
  const [company] = useCompany()
  return (
    <companyContext.Provider value={[teams, company]}>
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Banner />
              {/* send props to Service container, to show only show 4 services in homepage */}
              <Services type="home_page"></Services>
            </Route>
            {/* to show all services in services page */}
            <Route exact path="/services">
              <Services type="services_page"></Services>
            </Route>
            <Route exact path="/services/:serviceID">
              <ServiceDetails />
            </Route>
            <Route exact path="/teams">
              <Teams></Teams>
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
            <Route exact path="/">
              <Banner></Banner>
              <Services type="home_page"></Services>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    </companyContext.Provider>
  );
}

export default App;
