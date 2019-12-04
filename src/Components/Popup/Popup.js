import React, {useState} from 'react';
import cls from './Popup.css'
import {Dialog, DialogTitle, DialogContent, DialogActions, Button}
from '@material-ui/core'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import {connect} from "react-redux";

const Popup = ({readers, open, onClosePopup, book}) => {
  const [returnDate, setDate] = useState(new Date());
  const [readerId, setReaderID] = useState();
  const [info, setInfo] = useState(false);

  const handleChangeDate = date => {
    setDate(date);
  };
  const closeDialog=()=>{
    setInfo(false);
    onClosePopup();
  };
  const handleChangeReader = (event)=>{
    event.preventDefault();
    setInfo(false);
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
  const handleTakeBook = () => {
    // eslint-disable-next-line
    readers.map((reader, index)=>{
      if (reader.id === Number(readerId)){
        let idR = false;
        // eslint-disable-next-line
        reader.readingBooks.map((read)=>{
          if (read.id === book.id){
            idR = true;
          }
        });
        if(idR){
          setInfo(true)
        } else {
          book.dateStart = new Date().toLocaleDateString();
          book.dateReturn = returnDate.toLocaleDateString();
          book.nums -=1;
          reader.readingBooks.push(book);
          handleChangeColor(book);
          setInfo(false);
          onClosePopup();
        }
      }
    });
  };

  return (
      <Dialog
        open={open}
        onClose={onClosePopup}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Видача книги"}</DialogTitle>
        <DialogContent className={cls.wrapDialogContent}>
          <div className={cls.wrapSelect}>
            <select
              onChange={handleChangeReader}
            >
              <option>Виберіть читача</option>
              {readers.map((reader, index)=>{
                  return (
                    <option key={index} value={reader.id} >{reader.name}</option>
                  )
                })
              }
            </select>
          </div>
          <DatePicker
            selected={returnDate}
            onChange={handleChangeDate}
          />
          {info ? <p style={{color: 'red'}}>Книга не може бути видана. Уже є у читача.</p> : <span> </span>}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeDialog} color="primary">
            Закрити
          </Button>
          <Button autoFocus onClick={handleTakeBook} color="primary">
            Взяти кгину
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default connect()(Popup);