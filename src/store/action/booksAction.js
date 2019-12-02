import {CONSTS} from "./actionTypes";

export const addBook = (title, author, year, genre, nums)=>{
  return {
    type: CONSTS.ADD_BOOK,
    payload: {
      title,
      author,
      year,
      genre,
      nums
    }
  }
};
export const editBook = (bookId, title, author, year, genre, nums)=>{
  return {
    type: CONSTS.EDIT_BOOK,
    payload: {
      bookId,
      title,
      author,
      year,
      genre,
      nums
    }
  }
};
export const deleteBook = bookId => {
  return {
    type: CONSTS.DELETE_BOOK,
    payload: bookId
  }
};