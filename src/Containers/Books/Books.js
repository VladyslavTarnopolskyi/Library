import React, {Component} from 'react';
import cls from './Books.css'
import AddBook from '../../Components/AddBook/AddBook'
import {connect} from "react-redux";

class Books extends Component{
  render() {
    return (
      <div className={cls.Books}>
        <h2>Додати нову книгу в каталог</h2>
        <AddBook books={this.props.books}/>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  books: state.books,
});


export default connect(mapStateToProps)(Books) ;