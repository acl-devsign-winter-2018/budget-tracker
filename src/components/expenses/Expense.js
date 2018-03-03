import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense } from './actions';


class Expense extends Component {
  render(){
    const { expense, id, categoryId, removeExpense } = this.props;

    return (
      <li>
        { expense }
        <button onClick={() => removeExpense(id, categoryId)}>Remove</button>
      </li>
    );
  }
}

export default connect(
  null,
  { removeExpense }
)(Expense);