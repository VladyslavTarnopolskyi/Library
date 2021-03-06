import React, {useState} from "react";
import cls from './BooksList.css'
import {IconButton, TableCell, TableRow, Button,TextField} from "@material-ui/core";
import {CheckBox, Close, Delete, Edit} from "@material-ui/icons";
import {deleteBook, editBook} from "../../store/action/booksAction";
import {connect} from "react-redux";
import Popup from "../Popup/Popup";
const genreName = [
  'Детектив',
  'Роман',
  'Триллер',
  'Пригоди',
  'Містика',
  'Бойовик',
  'Фактастика',
  'Фентезі',
  'Казки',
  'Поезія',
  'Програмування'
];

const BookItem =(props) =>{
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [bookTitle, setBookTitle] = useState(props.book.title);
  const [bookAuthor, setBookAuthor] = useState(props.book.author);
  const [bookYear, setBookYear] = useState(props.book.year);
  const [bookGenre, setBookGenre] = useState([props.book.genre]);
  const [bookNums, setBookNums] = useState(props.book.nums);
  const [isValidTakeBtn, setValidBtn]= useState(false);

  const closeEdit=()=>{
    setBookTitle(props.book.title);
    setBookAuthor(props.book.author);
    setBookYear(props.book.year);
    setBookGenre([props.book.genre]);
    setBookNums(props.book.nums);
    setIsEditing(false)
  };

  const handleClickOpen = () => {
    console.log('props.book.id',props.book.id);
    setOpen(true);
  };
  const checkNum =()=>{
    if (props.book.nums === 0){
      setValidBtn(true)
    }
  };
  const handleClose = () => {
    setOpen(false);
    checkNum();
  };
  const onChangeTitle = (event) => {
    event.preventDefault();
    setBookTitle(event.target.value)
  };
  const onChangeAuthor = (event) => {
    event.preventDefault();
    setBookAuthor(event.target.value)
  };
  const onChangeYear = (event) => {
    event.preventDefault();
    setBookYear(event.target.value)
  };

  const onChangeGenre = (event) => {
    event.preventDefault();
    const { options } = event.target;
    let value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setBookGenre(value);
  };
  const onChangeNumber = (event) => {
    event.preventDefault();
    setBookNums(event.target.value)
  };

  const handleDeleteBook = () => {
    const {dispatch, bookId} = props;
    dispatch(deleteBook(bookId));
  };
  const handleFinishEditing = (e) => {
    setIsEditing(false);
    const {dispatch, bookId} = props;
    dispatch(editBook(bookId, bookTitle, bookAuthor, bookYear, bookGenre, bookNums));
  };
  return (
    <React.Fragment>
      <Popup onClosePopup={handleClose} open={open} readers={props.readers} book={props.book} bookId={props.bookId}/>
      <TableRow>
        <TableCell scope="row">
          {isEditing ? (
            <TextField value={bookTitle} onChange={onChangeTitle}/>
          ) : (
            <span>{props.book.title}</span>
          )}
        </TableCell>
        <TableCell align="right">
          {isEditing ? (
            <TextField value={bookAuthor} onChange={onChangeAuthor}/>
            ) : (
              <span>{props.book.author}</span>
          )}
        </TableCell>
        <TableCell align="right">
          {isEditing ? (
            <TextField type="number" value={bookYear} onChange={onChangeYear}/>
          ) : (
            <span>{props.book.year}</span>
          )}
        </TableCell>
        <TableCell align="right">
          {isEditing ? (
            <div>
            <label>
              Виберіть жанр(и)
            </label>
            <select multiple value={bookGenre} onChange={onChangeGenre}>
              {genreName.map(name => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            </div>
          ) : (
              props.book.genre.map((genre, index, arr) => {
                return (index < arr.length - 1 ? genre + ', ' : genre)
              })
          )}
        </TableCell>
        <TableCell align="right">
          {isEditing ? (
            <TextField type="number" value={bookNums} onChange={onChangeNumber}/>
          ) : (
            <span>{props.book.nums}</span>
          )}
        </TableCell>
        {isEditing ? (
          <TableCell align="right" >
            <div className={cls.wrapBtn}>
              <IconButton aria-label="edit" size="small" onClick={handleFinishEditing}><CheckBox/></IconButton>
              <IconButton aria-label="close" size="small" onClick={closeEdit}><Close/></IconButton>
            </div>
          </TableCell>
        ) : (
          <TableCell align="right" >
            <div className={cls.allBtn}>
              <Button size='small' variant="contained" color="primary" onClick={handleClickOpen} disabled={isValidTakeBtn}>Видати книгу</Button>
              <div className={cls.wrapBtn}>
                <IconButton aria-label="edit" size="small" onClick={() => setIsEditing(true)} onSubmit={handleFinishEditing}><Edit/></IconButton>
                <IconButton aria-label="delete" size="small" onClick={handleDeleteBook}><Delete/></IconButton>
              </div>
            </div>
          </TableCell>
        )}
      </TableRow>
    </React.Fragment>
  )
};
const mapStateToProps = state => ({
  readers: state.readers
});
export default connect(mapStateToProps)(BookItem);