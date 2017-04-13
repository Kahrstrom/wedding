import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './containers/home';
import FormEntry from './components/form-entry';
// import PostsIndex from './components/posts_index/';
// import PostsNew from './components/posts_new/';
// import PostsShow from './components/posts_show/';
export default (
    <Route path="/" component={App}>

        <IndexRoute component={Home} />
        <Route path="/register" component={FormEntry} />
        {/*<Route path="posts/:id" component={PostsShow} />*/}
    </Route>
); 
 