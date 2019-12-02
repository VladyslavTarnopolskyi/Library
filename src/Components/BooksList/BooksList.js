import React from "react";
import {Table, TableBody, TableRow, TableCell, TableHead} from '@material-ui/core';
import {connect} from "react-redux";
import BookItem from "./BookItem";

const BooksList =(props)=>{
    return (
      <React.Fragment>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{background: "darkgray"}}>
              <TableCell style={{color: "white", fontWeight: 700}} component="th">Title</TableCell>
              <TableCell style={{color: "white", fontWeight: 700}} align="right">Author</TableCell>
              <TableCell style={{color: "white", fontWeight: 700}} align="right">Year</TableCell>
              <TableCell style={{color: "white", fontWeight: 700}} align="right">Genre</TableCell>
              <TableCell style={{color: "white", fontWeight: 700}} align="right">Nums</TableCell>
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
      </React.Fragment>
    )
};

const mapStateToProps = state => ({
  books: state.books,
  readers: state.readers
});

export default connect(mapStateToProps)(BooksList) ;