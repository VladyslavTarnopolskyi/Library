import React from 'react';
import {connect} from "react-redux";
import {returnBook} from "../../../store/action/readersAction";

const ReadersItem = (props) => {
  const handleReturnBook =() => {
    console.log('props.books',props.books);
    console.log(props.readerId);
    console.log(props.bookId);
    props.dispatch(returnBook(props.readerId, props.bookId));
    props.books.map((book, index)=>{
      if(props.bookId === book.id){
        book.nums +=1;
      }
    })

  };
  return (
    <div className='ReadersItem'>
      <ul>
          <li>
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
  );
};

const mapStateToProps = state => ({
  books: state.books
});
export default connect(mapStateToProps)(ReadersItem);