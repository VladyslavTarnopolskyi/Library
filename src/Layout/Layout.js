import React, {Component} from 'react';
import cls from './Layout.css';
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
        <div className={cls.Layout} >
          <header className={cls.Header}>
            <Hidden smUp>
              <IconButton onClick={this.handleDrawerToggle} style={{color: 'white'}}>
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
            </Hidden>
            <span className={cls.Logo}>ЛОГОТИП</span>
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
              <Drawer variant="permanent" open >
                <Navigation onClose={this.handleDrawerToggle}/>
              </Drawer>
            </Hidden>
          </header>
          <main className={cls.Main}>
            {this.props.children}
          </main>
          <footer className={cls.Footer}>&copy; Бібліотека</footer>
        </div>
      </React.Fragment>
    )
  }
}
export default connect()(Layout);