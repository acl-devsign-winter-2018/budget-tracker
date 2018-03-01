import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from './action';
import CategoryForm from '../categories/CategoryForm';
import Expense from './Expense';

class Expenses extends Component {

  render() {
    const { expenses } = this.props;
    return (
      <section>
        <CategoryForm/>
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