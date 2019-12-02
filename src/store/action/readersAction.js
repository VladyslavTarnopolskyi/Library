import {CONSTS} from "./actionTypes";

export const takeBook = (readerId, book)=>{
  return {
    type: CONSTS.TAKE_BOOK,
    payload: {
      readerId,
      book
    }
  }
};

export const saveDate = (readerId, bookId, newDate)=>{
  return {
    type: CONSTS.SAVE_DATE,
    payload: { readerId, bookId, newDate }
  }
};

export const returnBook = (readerId, bookId)=>{
  return{
    type: CONSTS.RETURN_BOOK,
    payload: {readerId, bookId}
  }
};
