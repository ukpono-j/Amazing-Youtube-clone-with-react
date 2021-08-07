
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/header/Header';
import HomeScreen from './Components/screens/HomeScreen';
import LoginScreen from './Components/screens/loginScreen/LoginScreen';
import Sidebar from './Components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function Layout({ children }) {
  const [sidebar, toggleSidbar] = useState(false)
  const handleToggleSidebar = () => toggleSidbar(value => !value)
  return (
    <div className="App">
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__menu" >
          {children}
        </Container>

      </div>
    </div>
  )
}



function App() {


  return (
    <Router>
      <Switch>


        <Route path="/" exact >
          <Layout >
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/auth">
          <LoginScreen />
        </Route>
        <Route path="/search">
          <Layout >
            <h1>Search Result</h1>
          </Layout>
        </Route>
      </Switch>
      <Route>
        <Redirect />
      </Route>
    </Router>
  );
}

export default App;
