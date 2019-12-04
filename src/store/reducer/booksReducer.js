import {CONSTS} from "../action/actionTypes";

const initialState = [
  {
    title: 'I, robot',
    author: 'Isaac Asimov',
    id: 0,
    year: 1950,
    genre: [ 'Детектив', 'Триллер', 'Фантастика'],
    nums: 5,
    dateStart: new Date(),
    dateReturn: new Date(),
    type: 'newBook'
  },
  {
    title: 'Кобзар',
    author: 'Тарас Шевченко',
    id: 1,
    year: 2009,
    genre: ['Поезія'],
    nums: 500,
    dateStart: new Date(),
    dateReturn: new Date(),
    type: 'newBook'
  },
  {
    title: 'Вивчаємо JavaScript',
    author: 'Етан Браун',
    id: 2,
    year: 2016,
    genre: ['Програмування'],
    nums: 13,
    dateStart: new Date(),
    dateReturn: new Date(),
    type: 'newBook'
  },
  {
    title: 'Велика книга CSS',
    author: 'Девід Макфарланд',
    id: 3,
    year: 2019,
    genre: ['Програмування'],
    nums: 300,
    dateStart: new Date(),
    dateReturn: new Date(),
    type: 'newBook'
  }
];

export default function booksReducer(state = initialState, action) {
  switch (action.type){

    case CONSTS.ADD_BOOK: {
      let newState = [...state];
      let booksId = newState.map( item => item.id );
      if ( !booksId.length ) booksId.push(0);
      newState.push({
        id: Math.max(...booksId) + 1,
        title: action.payload.title,
        author: action.payload.author,
        year: action.payload.year,
        genre: action.payload.genre,
        nums: action.payload.nums,
        dateStart: new Date(),
        dateReturn: new Date(),
        type: 'newBook'
      });
      return newState;
    }
    case CONSTS.DELETE_BOOK: {
      const bookId = action.payload;
      const newState = [...state];
      newState.forEach( (item, index) => {
        console.log(bookId);
        if ( item.id === bookId ) {
          newState.splice(index, 1);
        }
      });

      return newState;
    }
    case CONSTS.EDIT_BOOK: {
      const {bookId, title, author, year, genre, nums} = action.payload;
      const newState = [...state];
      const book = state[bookId];
      book.title = title;
      book.author = author;
      book.year = year;
      book.genre = genre;
      book.nums = nums;
      return newState;
    }
    default:
      return state
  }
}