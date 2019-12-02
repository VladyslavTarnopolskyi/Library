import React, {Component} from "react";
import classes from "./Navigation.css";
import {NavLink} from "react-router-dom";
import {List, ListItem }from "@material-ui/core";

const links = [
  {to: '/', label: 'Catalog', exact: true},
  {to: '/books', label: 'Books', exact: false},
  {to: '/readers', label: 'Readers', exact: false},
];

class Navigation extends Component{
  clickHandler =()=>{
    this.props.onClose();
  };
  renderLinks(){
    return links.map((link, i)=>{
      return (
        <ListItem button key={i} className={classes.ListItem}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </ListItem>
      )
    })
  }
  render() {
    return (
      <nav>
        <List className={classes.Navigation}>
          {this.renderLinks()}
        </List>
      </nav>

    )
  }
}

export default Navigation;