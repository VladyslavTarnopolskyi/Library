import React from 'react';
import {connect} from "react-redux";
import ReadersItem from "./ReadersItem/ReadersItem";

const ReadersList = (props) => {
  return (
    props.readers.map((reader, index)=>{
      return (
        <div className='readersList' key={index}>
          <h3>{reader.name}</h3>
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
        </div>
      )
    })
  );
};

export default connect()(ReadersList);