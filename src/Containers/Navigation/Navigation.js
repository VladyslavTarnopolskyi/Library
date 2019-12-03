import React, {Component} from "react";
import classes from "./Navigation.css";
import {NavLink} from "react-router-dom";
import {List, ListItem }from "@material-ui/core";

const links = [
  {to: '/', label: 'Каталог', exact: true},
  {to: '/add-new-book', label: 'Додати книгу', exact: false},
  {to: '/readers', label: 'Читачі', exact: false},
];

class Navigation extends Component{
  clickHandler =()=>{
    this.props.onClose();
  };
  renderLinks(){
    return links.map((link, i)=>{
      return (
        <ListItem button key={i} className={classes.ListItem} color="primary">
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
      <nav className={classes.Navigation}>
        <List>
          {this.renderLinks()}
        </List>
      </nav>

    )
  }
}

export default Navigation;