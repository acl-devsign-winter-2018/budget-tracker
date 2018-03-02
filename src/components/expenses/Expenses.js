import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from './actions';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';

class Expenses extends Component {

  handleAdd = expense => {
    const { addExpense, catId } = this.props;
    addExpense(catId, expense);
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
  ({ expensesByCat }, { addExpense }, { catId }) => {
    return {
      expenses: expensesByCat[catId],
      addExpense,
      catId
    };
  }
)(Expenses);