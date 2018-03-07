import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenseActions';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';
import './expenses.css';

class Expenses extends Component {
  
  handleAdd = expense => {
    const { addExpense, categoryId } = this.props;
    addExpense(categoryId, expense);
  };

  render() {
    const { expenses } = this.props;
    return (
      <div className="expenses">
        <h3>Create Expense</h3>
        <ExpenseForm onComplete={this.handleAdd} expensePlaceholder={'Phone bill, groceries, car payment'} pricePlaceholder={'50, 12, 145...'} buttonText="Add" classData={"expense-add"}/>
        <ul>
          {expenses.map(expense => 
            <Expense key={expense.id} expenseObj={expense}/>
          )}
        </ul>
      </div>
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