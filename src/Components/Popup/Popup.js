import React, {useState} from 'react';
import cls from './Popup.css'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@material-ui/core'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import {connect} from "react-redux";
// import {takeBook, saveDate} from "../../store/action/readersAction";

const Popup = ({readers, books, open, onClosePopup, book, bookId}) => {
  const [returnDate, setDate] = useState(new Date());
  const [readerId, setReaderID] = useState();


  const handleChangeDate = date => {
    console.log('handleChangeDate', date.toLocaleDateString());
    setDate(date)
  };
  const handleSelectDate = date => {
    console.log('handleSelectDate', date.toLocaleDateString());
    console.log(readerId);
    // dispatch(saveDate(Number(readerId), bookId, date));

  };
  const handleChangeReader = (event)=>{
    console.log('handleChangeReader');
    event.preventDefault();
    setReaderID(event.target.value);
  };
  const handleTakeBook = () => {
    console.log('handleTakeBook');
    readers.map((reader, index)=>{
      if (reader.id == readerId){
        console.log(reader.id);
        console.log(readerId);
        book.dateStart = new Date(1900,11,11).toLocaleDateString();
        book.dateReturn = returnDate.toLocaleDateString();
        book.nums -=1;
        reader.readingBooks.push(book);
      }
    })

    // dispatch(takeBook(Number(readerId), newBook, book.id))
  };
  return (
      <Dialog
        open={open}
        onClose={onClosePopup}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent className={cls.wrapDialogContent}>
          <select
            onChange={handleChangeReader}
          >
            <option>- take reader -</option>
            {readers.map((reader, index)=>{
                return (
                  <option key={index} value={reader.id} >{reader.name}</option>
                )
              })
            }
          </select>

          <DatePicker
            selected={returnDate}
            onSelect={handleSelectDate}
            onChange={handleChangeDate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTakeBook} color="primary">
            add book
          </Button>
          <Button autoFocus onClick={onClosePopup} color="primary">
            Disagree
          </Button>
          <Button onClick={onClosePopup} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  );
};
const mapStateToProps = state => ({
  readers: state.readers,
  books: state.books
});
export default connect(mapStateToProps)(Popup);