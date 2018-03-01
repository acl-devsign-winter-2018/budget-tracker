import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense, updateExpense } from '../actions/expenseActions';
import ExpenseForm from './ExpenseForm.js';


class Expense extends Component {

  state = {
    editing: false
  };

  handleEdit = expense => {
    this.props.updateExpense(expense);
    this.setState({ editing: false });
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  render() {
    const { expenseObj, removeExpense } = this.props;
    const { id, categoryId, name, price } = expenseObj;
    const { editing } = this.state;


    return (
      <li className="expense">
        {editing ? 
          <ExpenseForm buttonText={'Update'} expenseObj={expenseObj} onComplete={this.handleEdit}/> :
          <div className="expense-item">
            <h3>{name}</h3>
            <h4>${price}</h4>
          </div>
        }

        <div className="item-buttons">
          <button onClick={this.handleToggleEdit}>
            {editing ? 'Cancel' : '✎'}
          </button>
          <button onClick={() => removeExpense(id, categoryId)}>Delete</button>
        </div>
      </li>
    ); 
  }
}

export default connect(
  null,
  { removeExpense, updateExpense }
)(Expense);
