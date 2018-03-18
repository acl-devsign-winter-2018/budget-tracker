import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateExpense, removeExpense } from './actions';
import ExpenseForm from './ExpenseForm';

class Expense extends Component {
  
  state = {
    editing: false
  };

  handleEdit = expense => {
    this.props.updateExpense({ 
      id: expense.id,
      categoryId: this.categoryId,
      updates: expense
    });
    this.setState({ editing: false });
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };
  
  render() {
    const { expenseObj, removeExpense } = this.props;
    const { id, name, price, categoryId, timestamp } = expenseObj;
    const { editing } = this.state;
    this.categoryId = categoryId;

    return (
      <li className="expense-li">
        <div>
          {editing ? 
            <ExpenseForm expenseObj={expenseObj} onEdit={this.handleEdit}/> :
            <p>{name} - {price}<br/>
              {/* <time>{timestamp.toLocaleString()}</time> */}
            </p>
          }
          <div className="buttons">
            <button onClick={this.handleToggleEdit}>
              {editing ? 'cancel' : '✎'}
            </button>
            <button onClick={() => removeExpense(id)}>✖</button>
          </div>
        </div>
        <div>
          <div>
            <button className="note-remove" onClick={() => removeExpense(id, categoryId)}>✖</button>
          </div>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { updateExpense, removeExpense }
)(Expense);