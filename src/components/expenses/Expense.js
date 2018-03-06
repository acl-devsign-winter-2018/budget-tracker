import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense, updateExpense } from './actions';
import ExpenseForm from '../categoryForm/ExpenseForm';
import '../categories/category.css';


class Expense extends Component {

  state = {
    editing: false
  };

  handleEdit = expense => {
    this.props.updateExpense(this.props.categoryId,
      {
        id: expense.id,
        categoryId: this.props.categoryId,
        updates: expense
      });
    this.setState({ editing: false });
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  render(){
    const { name, id, categoryId, removeExpense, price } = this.props;
    const timestamp = new Date(this.props.timestamp);
    const { editing } = this.state;

    return (
      <li>
        {editing ?
          <div id="uppercase">
            <ExpenseForm id={id} categoryId={categoryId} text={name} onEdit={this.handleEdit}/>
            <button id="button" onClick={this.handleToggleEdit}>cancel</button>
          </div>
          :
          <div id="uppercase">
            <section>
              { name } 
            &nbsp; ${ price }
            &nbsp; {timestamp.toLocaleDateString()}
            </section>
            <section id="section-button">
              <button id="button" onClick={() => removeExpense(id, categoryId)}>Remove</button>
              <button id="button" onClick={this.handleToggleEdit}>✎</button>
            </section>
          </div>
        }
      </li>
    );
  }
}

export default connect(
  null,
  { removeExpense, updateExpense }
)(Expense);