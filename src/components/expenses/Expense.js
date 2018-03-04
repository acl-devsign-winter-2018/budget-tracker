import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense } from './actions';

class Expense extends Component {
  render() {
    const { id, text, categoryId, removeExpense, timestamp } = this.props;

    return (
      <li className="expense-li">
        <p>{text}<br/>
          <time>{timestamp.toLocaleString()}</time>
        </p>
        <div>
          <button className="note-remove" onClick={() => removeExpense(id, categoryId)}>✖</button>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { removeExpense }
)(Expense);