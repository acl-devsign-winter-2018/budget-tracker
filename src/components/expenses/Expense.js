import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense } from './actions';

class Expense extends Component {
  render() {
    const { id, categoryId, name, price, removeExpense } = this.props;

    return (
      <li>
        <h3>{name}</h3>
        <p>{price}</p>
        <button onClick={() => removeExpense(categoryId, id)}>X</button>
      </li>
    );
  }
}

export default connect(
  null,
  { removeExpense }
)(Expense);