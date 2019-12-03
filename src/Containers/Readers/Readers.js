import React, {Component} from "react";
import cls from './Readers.css'
import {connect} from "react-redux";
import ReadersList from "../../Components/ReadersList/ReadersList";

class Readers extends Component{

  render() {
    return (
      <div className='readers'>
        <h2>Список читачів</h2>
        <ul className={cls.checkColor}>
          <li className={cls.checkItem}><span className={cls.color+ ' ' + cls.normalDate}> </span><span>Видана книга</span></li>
          <li className={cls.checkItem}><span className={cls.color+ ' ' + cls.badDate}> </span><span>Прострочена дата повернення</span></li>
        </ul>
        <ReadersList readers={this.props.readers} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  readers: state.readers,
});

export default connect(mapStateToProps)(Readers) ;