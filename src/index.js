import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import PostIndex from './components/post_index.js';
import CreatePost from './components/create_post.js';
import OpenPost from './components/open_posts.js';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/posts/new' component={CreatePost} />
          <Route path='/posts/:id' component={OpenPost} />
          <Route path='/' component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
