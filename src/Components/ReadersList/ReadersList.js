import React from 'react';
import cls from './ReadersList.css';
import {connect} from "react-redux";
import ReadersItem from "./ReadersItem/ReadersItem";
import {Table, TableHead, TableBody, TableRow, TableCell} from "@material-ui/core"

const ReadersList = (props) => {
  return (
    <Table size="small" className={cls.ReadersList}>
      <TableHead>
        <TableRow>
          <TableCell align="right">Назва книги</TableCell>
          <TableCell align="right">Автор</TableCell>
          <TableCell align="right">Дата взяття</TableCell>
          <TableCell align="right">Дата повернення</TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
    {props.readers.map((reader, index)=>{
        return (
          <React.Fragment key={index}>
            <TableRow >
              <TableCell className={cls.ReaderName} colSpan="6" align='left'>{reader.name}</TableCell>
            </TableRow>
            {
              reader.readingBooks.map((book, index)=>{
                return (
                  <ReadersItem
                    key={index}
                    readerId={reader.id}
                    bookId={book.id}
                    book={book}
                  />
                )
              })
            }
          </React.Fragment>
        )
        })
      }
      </TableBody>
      </Table>
  );
};

export default connect()(ReadersList);