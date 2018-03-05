import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense, updateExpense } from './actions';
import ExpenseForm from '../categoryForm/ExpenseForm';


class Expense extends Component {

  state = {
    editing: false
  };

  handleEdit = expense => {
    this.props.updateExpense(this.categoryId,
      {
        id: expense.id,
        categoryId: this.categoryId,
        updates: expense
      });
    this.setState({ editing: false });
  }

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
          <div>
            <ExpenseForm id={id} categoryId={categoryId} text={name} onEdit={this.handleEdit}/>
            <button id="button" onClick={this.handleToggleEdit}>cancel</button>
          </div>
          :
          <div>
            { name } 
            &nbsp; { price }
            &nbsp; {timestamp.toLocaleDateString()}
            <button onClick={() => removeExpense(id, categoryId)}>Remove</button>
            <button id="button" onClick={this.handleToggleEdit}>✎</button>
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