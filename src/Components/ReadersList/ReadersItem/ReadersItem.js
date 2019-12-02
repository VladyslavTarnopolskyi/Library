import React from 'react';
import cls from './ReadersItem.css'
import {connect} from "react-redux";
import {returnBook} from "../../../store/action/readersAction";

const ReadersItem =(props)=>{
  const handleReturnBook =() => {
    props.dispatch(returnBook(props.readerId, props.bookId));
    // eslint-disable-next-line
    props.books.map((book, index)=>{
      if(props.bookId === book.id){
        book.nums +=1;
      }
    })
  };
  return (
    <div className='ReadersItem'>
      <ul>
        <li className={cls.ReadersItem + ' ' + cls[props.book.type]} >
          <span>{props.book.title}</span>
          <span>|</span>
          <span>{props.book.author}</span>
          <span>|</span>
          <span>{props.book.dateStart}</span>
          <span>|</span>
          <span>{props.book.dateReturn}</span>
          <button onClick={handleReturnBook}>Return book</button>
        </li>
      </ul>
    </div>
  )
};

const mapStateToProps = state => ({
  books: state.books
});
export default connect(mapStateToProps)(ReadersItem);