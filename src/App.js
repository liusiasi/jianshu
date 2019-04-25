import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style.js'
import Header from './common/header'
import { GlobalIconFont } from './statics/iconfont/iconfont.js'
import store from './store'
import { Provider } from 'react-redux';
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Writer from './pages/writer'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <GlobalIconFont/>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/writer' exact component={Writer}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
