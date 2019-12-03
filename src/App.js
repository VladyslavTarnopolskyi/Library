import React, { Component } from 'react';
import cls from'./App.css';
import {Switch, Route} from 'react-router-dom'
import Layout from './Layout/Layout';
import Books from './Containers/Books/Books';
import Readers from "./Containers/Readers/Readers";
import Catalog from "./Containers/Catalog/Catalog";
import {connect} from "react-redux";

class App extends Component {
  render() {
    return (
      <div className={cls.App}>
        <Layout>
          <Switch>
            <Route path='/add-new-book' component={Books}/>
            <Route path='/readers' component={Readers}/>
            <Route path='/' component={Catalog}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  readers: state.readers
});

export default connect(mapStateToProps)(App);
