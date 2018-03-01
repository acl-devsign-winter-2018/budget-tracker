import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense } from './actions';

class Expense extends Component {
  render() {
    const { id, catId, expenseName, amount, removeExpense } = this.props;

    return (
      <li>
        <h3>{expenseName}</h3>
        <p>{amount}</p>
        <button onClick={() => removeExpense(id, catId)}>X</button>
      </li>
    );
  }
}

export default connect(
  null,
  { removeExpense }
)(Expense);