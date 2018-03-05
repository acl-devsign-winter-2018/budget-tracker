import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateExpense, removeExpense } from './actions';
import ExpenseForm from './ExpenseForm';

class Expense extends Component {
  
  state = {
    editing: false
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  handleEdit = expense => {
    this.props.updateExpense(expense.categoryId, expense.id, expense);
    this.setState({ editing: false });
  };

  render() {
    const { id, categoryId, name, price, removeExpense } = this.props;
    const { editing } = this.state;

    return (
      <li>
        {editing ? 
          <ExpenseForm id={id} name={name} categoryId={categoryId} onEdit={this.handleEdit}/> :
          <div className="expense">
            <h2>{name}</h2>
            <p>{price}</p>
          </div> 
        }

        <div className="editExpense">
          <button onClick={this.handleToggleEdit}>
            {editing ? 'Cancel' : 'Edit'}
          </button>
          <button onClick={() => removeExpense(categoryId, id)}>Remove</button>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { updateExpense, removeExpense }
)(Expense);