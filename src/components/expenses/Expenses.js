import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from './actions';
import ExpenseForm from '../categoryForm/ExpenseForm';
import Expense from './Expense';

class Expenses extends Component {
  
  handleAdd = expense => {
    const { addExpense, categoryId } = this.props;
    addExpense(categoryId, expense);
  };
  
  render(){

    const { expenses } = this.props;

    return (
      <section>
        <ExpenseForm onEdit={this.handleAdd}/>
        <ul>
          {expenses && expenses.map(expense => (
            <Expense key={expense.id}{...expense}/>
          ))}
        </ul>
      </section>

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