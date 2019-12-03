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

const Popup = ({readers, open, onClosePopup, book}) => {
  const [returnDate, setDate] = useState(new Date());
  const [readerId, setReaderID] = useState();
  const [info, setInfo] = useState(false);

  const handleChangeDate = date => {
    setDate(date)
  };
  const handleChangeReader = (event)=>{
    event.preventDefault();
    setReaderID(event.target.value);
  };
  const handleChangeColor=(book)=>{
    const curDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).valueOf();
    const returnDate = new Date(book.dateReturn.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1')).valueOf();
    if (returnDate > curDate) {
      book.type = 'newBook';
    } else if (returnDate === curDate) {
      book.type = 'closedDay';
    } else if (returnDate < curDate) {
      book.type = 'overDate';
    }
  };
  const renderInfo =()=>{
    return (
      <div>Ви не можете взяти цю книгу. У вас уже є ця книга.</div>
    )
  };
  const handleTakeBook = () => {
    // eslint-disable-next-line
    readers.map((reader, index)=>{
      if (reader.id === Number(readerId)){
        let idR = false;
        reader.readingBooks.map((read)=>{
          if (read.id === book.id){
            idR = true;
          }
        });
        if(idR){
          console.log('taka knyha e');
        } else {
          console.log('new add');
          book.dateStart = new Date().toLocaleDateString();
          book.dateReturn = returnDate.toLocaleDateString();
          book.nums -=1;
          reader.readingBooks.push(book);
          handleChangeColor(book);
          onClosePopup();
        }

      }
    });


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
            onChange={handleChangeDate}
          />
          {info ? renderInfo : <span> </span>}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClosePopup} color="primary">
            Закрити
          </Button>
          <Button autoFocus onClick={handleTakeBook} color="primary">
            Взяти кгину
          </Button>
        </DialogActions>
      </Dialog>
  );
};
// const mapStateToProps = state => ({
//   books: state.books
// });
export default connect()(Popup);