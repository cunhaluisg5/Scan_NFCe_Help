import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import CodeReading from './pages/CodeReading';
import Configurations from './pages/Configurations';
import GradesListing from './pages/GradesListing';
import Logout from './pages/Logout';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import SpendingAnalysis from './pages/SpendingAnalysis';
import ProductsAnalysis from './pages/ProductsAnalysis';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/authentication' component={Authentication} />
          <Route path='/codeReading' component={CodeReading} />
          <Route path='/configurations' component={Configurations} />
          <Route path='/gradesListing' component={GradesListing} />
          <Route path='/logout' component={Logout} />
          <Route path='/resetPassword' component={ResetPassword} />
          <Route path='/spendingAnalysis' component={SpendingAnalysis} />
          <Route path='/productsAnalysis' component={ProductsAnalysis} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;