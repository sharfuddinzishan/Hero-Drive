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
import { useCompany } from './Hooks/useCompany';
import { useTeam } from './Hooks/useTeam';
export const companyContext = createContext()
function App() {
  // Get Company Details 
  const [company, setCompany] = useCompany()
  // Get Compnay All team Members 
  const [team, setTeam] = useTeam()
  return (
    <companyContext.Provider value={[team, company]}>
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Banner></Banner>
              <Services type="home_page"></Services>
            </Route>
            <Route exact path="/services">
              {/* if homepage then show 4 services, otherwise show all  */}
              <Services type="services_page"></Services>
            </Route>
            <Route exact path="/services/:serviceID">
              <ServiceDetails />
            </Route>
            {/* If click on Team navlink on menubar then hide company information from about component  */}
            <Route exact path="/team">
              <About type="team_page"></About>
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
      </div>
    </companyContext.Provider>
  );
}

export default App;
