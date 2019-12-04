import React, {Component} from "react";
import {addBook} from "../../store/action/booksAction";
import {connect} from "react-redux";
import cls from "./AddBook.css"
import {TextField, Button, FormControl, InputLabel, Select} from "@material-ui/core";
import {Save} from "@material-ui/icons";

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
  "Програмування"
];

class AddBook extends Component{
  state = {
    isValidAdd: true,
    id: 0,
    title: '',
    author: '',
    year: 1900,
    genre: [],
    nums: 1,
    type: 'newBook'
  };
  onChangeTitle = (event) => {
    this.setState({title: event.target.value});
    this.isValid();
  };
  onChangeAuthor = (event) => {
    this.setState({author: event.target.value});
    this.isValid();
  };
  onChangeYear = (event) => {
    this.setState({year: event.target.value});
  };
  onChangeGenre = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      genre: value
    })
  };
  onChangeNumber = (event) => {
    this.setState({nums: event.target.value});
  };
  isValid=()=>{
    const {title, author} = this.state;
    if(title && author){
      this.setState({isValidAdd: false})
    }
  };
  handleAddBook = () => {
    const {dispatch} = this.props;
    const {title, author, year, genre, nums} = this.state;
    if(title) {
      dispatch(addBook(title, author, year, genre, nums));
      this.setState({
        isValidAdd: true,
        title: '',
        author: '',
        id: 0,
        year: 1900,
        genre: [],
        nums: 1,
        type: 'newBook'
      })
    }
    return;
  };
  onSubmit = (event) => {
    event.preventDefault();
  };
  render() {

    return (
      <form onSubmit={this.onSubmit} className={cls.AddBook}>
        <div>
          <TextField className={cls.Input} type="text" label="Назва" value={this.state.title} onChange={this.onChangeTitle}/>
          <TextField className={cls.Input} type="text" label="Автор" value={this.state.author} onChange={this.onChangeAuthor}/>
        </div>
        <div>
          <TextField className={cls.Input} type="number" label="Рік" value={this.state.year} onChange={this.onChangeYear}/>
          <TextField className={cls.Input} type="number" label="Кількість" value={this.state.nums} onChange={this.onChangeNumber}/>
        </div>
        <div>
          <FormControl className={cls.Input}>
            <InputLabel shrink htmlFor="select-multiple-native">
              Виберіть жанр(и)
            </InputLabel>
            <Select
              multiple
              native
              value={this.state.genre}
              onChange={this.onChangeGenre}
              inputProps={{
                id: 'select-multiple-native',
              }}
            >
              {genreName.map(name => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </Select>
          </FormControl>
          <TextField className={cls.Input} type="text" label="Жанр(и)" value={this.state.genre} InputProps={{readOnly: true}} variant="filled"/>
        </div>

        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={this.state.isValidAdd}
          startIcon={<Save />}
          onClick={this.handleAddBook}
        >
          Додати книгу
        </Button>
      </form>
    )
  }
}

export default connect() (AddBook);