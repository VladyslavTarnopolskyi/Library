import {CONSTS} from "../action/actionTypes";

const initialState = [
  {
    name: 'John Doe',
    id: 0,
    readingBooks: [
      {
        title: 'I, robot',
        author: 'Isaac Asimov',
        id: 0,
        year: 1950,
        genre: ['Fantasy', 'Thriller', 'Detective'],
        nums: 5,
        dateStart: new Date(2019, 9, 16).toLocaleDateString(),
        dateReturn: new Date(2020,11,24).toLocaleDateString(),
        type: 'oneDayToClosed'
      },
      {
        title: 'Кобзар',
        author: 'Тарас Шевченко',
        id: 1,
        year: 2009,
        genre: ['Поезія'],
        dateStart: new Date(2019, 9, 15).toLocaleDateString(),
        dateReturn: new Date(2020,0,20).toLocaleDateString(),
        type: 'newBook'
      }
    ]
  },
  {
    name: 'John',
    id: 1,
    readingBooks: [
      {
        title: 'Кобзар',
        author: 'Тарас Шевченко',
        id: 1,
        year: 2009,
        genre: ['Поезія'],
        dateStart: new Date(2019,10,1).toLocaleDateString(),
        dateReturn: new Date(2019,10,1).toLocaleDateString(),
        type: 'newBook'
      }
    ]
  }
];

export default function readersReducer(state = initialState, action) {
  switch (action.type){

    case CONSTS.TAKE_BOOK: {
      console.log("state", state);
      let {readerId, book} = action.payload;
      let newBook = book;
      let newState = [...state];
      newState.forEach((reader) => {
        if (reader.id === readerId) {
          reader.readingBooks.push(newBook);
          }
      });
      return newState;
    }

    case CONSTS.RETURN_BOOK: {
      const {readerId, bookId } = action.payload;
      let newState = [...state];
      const books = state[readerId].readingBooks;
      books.forEach((book, index) =>{
        if ( book.id === bookId ) {
          books.splice(index, 1);
        }
      });
      return newState;
    }
    case CONSTS.CHANGE_COLOR: {
      const { readerId, bookId, color } = action.payload;
      const newState = [...state];
      const books = state[readerId].readingBooks;
      books.forEach((book, index) =>{
        if ( book.id === bookId ) {
          console.log(color);
          book.type = color;
        }
      });

      return newState;
    }
    // case CONSTS.SAVE_DATE: {
    //   const { readerId, bookId, newDate } = action.payload;
    //   const newState = [...state];
    //   const readingBooks = state[readerId].readingBooks;
    //   readingBooks.forEach((book, index) =>{
    //     if ( book.id === bookId) {
    //       book.dateReturn = newDate;
    //     }
    //   });
    //   return newState
    // }

    default:
      return state
  }
}