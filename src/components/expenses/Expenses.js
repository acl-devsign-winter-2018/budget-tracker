import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from './actions';
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
      <section>
        <ExpenseForm onEdit={this.handleAdd}/>
        <ul>
          {expenses.map(expense => (
            <Expense key={expense.id} {...expense}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default connect (
  ({ expensesByCat }) => ({ expensesByCat }),
  { addExpense },
  ({ expensesByCat }, { addExpense }, { categoryId }) => {
    return {
      expenses: expensesByCat[categoryId],
      addExpense,
      categoryId
    };
  }
)(Expenses);