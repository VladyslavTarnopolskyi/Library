import React, {Component} from 'react';
import classes from './Layout.css';
import {CssBaseline, Drawer, Hidden, IconButton} from '@material-ui/core';
import Navigation from "../Containers/Navigation/Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";

class Layout extends Component{
  state = {
    isOpen: false
  };

  handleDrawerToggle =() =>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render(){
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.Layout} >
          <header className={classes.Header}>
            <Hidden smUp>
              <IconButton onClick={this.handleDrawerToggle}>
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
            </Hidden>
            <span>Books Library</span>
            <Hidden smUp>
              <Drawer
                variant="temporary"
                open={this.state.isOpen}
                onClose={this.handleDrawerToggle}
              >
                <Navigation onClose={this.handleDrawerToggle}/>
              </Drawer>
            </Hidden>
            <Hidden xsDown>
              <Drawer
                variant="permanent"
                open
              >
                <Navigation onClose={this.handleDrawerToggle}/>
              </Drawer>
            </Hidden>
          </header>
          <main className={classes.Main}>
            {this.props.children}
          </main>
          <footer className={classes.Footer}>Footer</footer>
        </div>
      </React.Fragment>
    )
  }
}
export default connect()(Layout);