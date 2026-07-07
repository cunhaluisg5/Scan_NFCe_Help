import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import HelpLayout from './layout/HelpLayout';
import HomePage from './pages/modern/HomePage';
import TopicPage from './pages/modern/TopicPage';
import ApiDocsPage from './pages/modern/ApiDocsPage';
import SupportPage from './pages/modern/SupportPage';
import NotFoundPage from './pages/modern/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <HelpLayout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/guia'>
            <Redirect to='/guia/comecar' />
          </Route>
          <Route path='/guia/:slug' component={TopicPage} />
          <Route path='/api' component={ApiDocsPage} />
          <Route path='/suporte' component={SupportPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </HelpLayout>
    </BrowserRouter>
  );
}

export default App;
