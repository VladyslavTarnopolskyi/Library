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
];

class AddBook extends Component{
  state = {
    id: 0,
    title: '',
    author: '',
    year: 0,
    genre: [],
    nums: 0
  };
  onChangeTitle = (event) => {
    this.setState({title: event.target.value});
  };
  onChangeAuthor = (event) => {
    this.setState({author: event.target.value});
  };
  onChangeYear = (event) => {
    this.setState({year: event.target.value});
  };
  // handleFocus = e => {
  //   e.target.select();
  // };
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
  handleAddBook = () => {
    const {dispatch} = this.props;
    const {title, author, year, genre, nums} = this.state;
    if(title) {
      dispatch(addBook(title, author, year, genre, nums));
      this.setState({
        title: '',
        author: '',
        id: 0,
        year: 1900,
        genre: [],
        nums: 0
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
        <TextField className={cls.Input} type="text" label="Title" value={this.state.title} onChange={this.onChangeTitle}/>
        <TextField className={cls.Input} type="text" label="Author" value={this.state.author} onChange={this.onChangeAuthor}/>
        <TextField className={cls.Input} type="number" label="Year" value={this.state.year} onChange={this.onChangeYear}/>

        <TextField className={cls.Input} type="number" label="Nums" value={this.state.nums} onChange={this.onChangeNumber}/>
        <TextField className={cls.Input} type="text" label="Genre" value={this.state.genre} InputProps={{readOnly: true,}} variant="filled"/>
        <FormControl>
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
        <Button
          classes={{
            root: 'myClasses'
          }}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<Save />}
          onClick={this.handleAddBook}
        >
          Add book
        </Button>
      </form>
    )
  }
}

export default connect() (AddBook);