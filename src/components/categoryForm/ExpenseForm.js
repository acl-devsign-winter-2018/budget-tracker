import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      name: '', price: '', 
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
      this.setState({ name: '', price: '' });
    };

    render(){
      const { name, price } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='expense'>
          Expense:  <input required name='name' placeholder='enter expense' value={name} onChange={this.handleChange}/>
          </label>
          <label htmlFor= 'amount'>
          Amount: $<input name= 'price' placeholder='enter amount' value= {price} onChange={this.handleChange}/>
          </label>
          <button type='submit'>ADD</button>
        </form>
      );
    }
}