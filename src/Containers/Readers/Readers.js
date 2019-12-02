import React, {Component} from "react";
import {connect} from "react-redux";
import ReadersList from "../../Components/ReadersList/ReadersList";

class Readers extends Component{
  render() {
    return (
      <div className='readers'>
        <h2>Readers</h2>
        <ReadersList readers={this.props.readers}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  readers: state.readers,
});

export default connect(mapStateToProps)(Readers) ;