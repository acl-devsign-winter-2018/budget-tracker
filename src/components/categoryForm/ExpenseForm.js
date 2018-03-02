import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      expense: '', amount: '', 
      ...props
    };
  }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };

    handleSubmit = event => {
      event.preventDefault();
      this.props.onEdit({
        ...this.state
      });
      this.setState({ expense: '', amount: '' });
    };

    render(){
      const { expense, amount } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='expense'>
          Expense:<input required name='expense' placeholder='enter expense' value={expense} onChange={this.handleChange}/>
          </label>
          <label htmlFor= 'amount'>
          Amount:<input name= 'amount' placeholder='enter amount' value= {amount} onChange={this.handleChange}/>
          </label>
          <button type='submit'>ADD</button>
        </form>
      );
    }
}