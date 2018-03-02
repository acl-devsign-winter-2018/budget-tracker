import React, { Component } from 'react';

export default class CategoryForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      budget: '',
      ...props
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });

    this.setState({ expenseName: '', amount: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, expenseName, amount } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="expenseName">
            <input 
              name="expenseName" 
              placeholder={ expenseName ? { expenseName } : 'Expense' } 
              value={expenseName} 
              onChange={this.handleChange}/>
          </label>
          <label htmlFor="amount">
            <input 
              name="amount" 
              placeholder={ amount ? { amount } : 'Amount' } 
              value={amount} 
              onChange={this.handleChange}/>
          </label>
          <button type="submit">{ id ? 'Update' : 'Add' }</button>
        </form>
      </div>
    );
  }
}
