import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense } from './actions';


class Expense extends Component {
  render(){
    const { name, id, categoryId, removeExpense, price } = this.props;

    return (
      <li>
        { name } 
        &nbsp; { price }
        &nbsp;
        <button onClick={() => removeExpense(id, categoryId)}>Remove</button>
      </li>
    );
  }
}

export default connect(
  null,
  { removeExpense }
)(Expense);