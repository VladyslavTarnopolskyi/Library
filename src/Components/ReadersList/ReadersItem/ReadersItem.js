import React from 'react';
import cls from './ReadersItem.css'
import {connect} from "react-redux";
import {returnBook} from "../../../store/action/readersAction";
import {TableCell, TableRow, Button} from "@material-ui/core";

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
    <TableRow className={cls.ReadersItem + ' ' + cls[props.book.type]}>
      <TableCell align="right">{props.book.title}</TableCell>
      <TableCell align="right">{props.book.author}</TableCell>
      <TableCell align="right">{props.book.dateStart}</TableCell>
      <TableCell align="right">{props.book.dateReturn}</TableCell>
      <TableCell align="right">
        <Button size='small' variant="contained" color="primary" onClick={handleReturnBook}>Повернути книгу</Button>
      </TableCell>
    </TableRow>
  )
};

const mapStateToProps = state => ({
  books: state.books
});
export default connect(mapStateToProps)(ReadersItem);