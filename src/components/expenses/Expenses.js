import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenseActions';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';

class Expenses extends Component {
  
  handleAdd = expense => {
    const { addExpense, categoryId } = this.props;
    addExpense(categoryId, expense);
  };

  render() {
    const { expenses } = this.props;
    return (
      <Fragment>
        <ExpenseForm onComplete={this.handleAdd} buttonText="Add Expense"/>
        <ul>
          {expenses.map(expense => (
            <Expense key={expense.id} expenseObj={expense}/>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  ({ expensesByCategory }) => ({ expensesByCategory }),
  { addExpense },
  ({ expensesByCategory }, { addExpense }, { categoryId }) => {
    return {
      expenses: expensesByCategory[categoryId],
      addExpense,
      categoryId
    };
  }
)(Expenses);