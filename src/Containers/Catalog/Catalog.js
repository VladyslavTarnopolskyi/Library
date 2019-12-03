import React, {Component} from 'react';
import BooksList from "../../Components/BooksList/BooksList";
import {connect} from "react-redux";

class Catalog extends Component {

  render() {
    return (
      <div>
        <h2>Catalog</h2>
        <BooksList/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(Catalog) ;