import React from "react";
import cls from './BooksList.css'
import {Table, TableBody, TableRow, TableCell, TableHead} from '@material-ui/core';
import {connect} from "react-redux";
import BookItem from "./BookItem";

const BooksList =(props)=>{
    return (
      <div className={cls.WrapBookTable}>
        <Table aria-label="simple table" className={cls.Table}>
          <TableHead>
            <TableRow className={cls.BooksList}>
              <TableCell style={{color: "white", fontWeight: 700}} component="th">Назва</TableCell>
              <TableCell style={{color: "white", fontWeight: 700}} align="right">Автор</TableCell>
              <TableCell style={{color: "white", fontWeight: 700}} align="right">Рік</TableCell>
              <TableCell style={{color: "white", fontWeight: 700}} align="right">Жанр</TableCell>
              <TableCell style={{color: "white", fontWeight: 700}} align="right">Кількість</TableCell>
              <TableCell style={{color: "white", fontWeight: 700}} align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            props.books.map((book, index) => {
              return (
                <BookItem key={index} bookId={book.id} book={book} />
              )
            })
          }</TableBody>
        </Table>
      </div>
    )
};

const mapStateToProps = state => ({
  books: state.books,
  readers: state.readers
});

export default connect(mapStateToProps)(BooksList) ;