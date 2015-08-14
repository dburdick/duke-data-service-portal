import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Project from './pages/project.jsx';
import NotFound from './pages/notFound.jsx';

var routes = (
    <Route name="app" path="/" handler={ App }>
        <Route name="access_token" handler={ Home } />
        <Route name="project" handler={ Project } />
        <Route name="home" handler={ Home } />
        <DefaultRoute handler={ Home } />
        <NotFoundRoute handler={ NotFound } />
    </Route>
);

export default routes;