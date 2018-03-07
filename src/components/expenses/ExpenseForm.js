import React, { Component } from 'react';
import './expenseForm.css';

export default class CategoryForm extends Component {
  
  constructor(props) {
    super(props); //accepts props and turns into state

    this.state = {
      name: '',
      price: '',
      expensePlaceholder: '',
      pricePlaceholder: '',

      ...props.expenseObj //spreads props into state
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      ...this.state
    });

    this.setState({ 
      name: '',
      price: '', 
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, name, price } = this.state;
    const { buttonText, expensePlaceholder, pricePlaceholder, classData } = this.props;
    return (
      <form className={`expense-form ${classData}`} onSubmit={this.handleSubmit}>
        <fieldset>
          <legend className="clip">{id ? 'Edit a Expense' : 'Add a Expense'}</legend>

          <label htmlFor="name"> Name:
          <input required name="name" value={name} placeholder={expensePlaceholder} onChange={this.handleChange}/>
          </label>

          <label htmlFor="price"> Price:
          <input required name="price" placeholder={pricePlaceholder} value={price} onChange={this.handleChange}/>
          </label>

        </fieldset>
        <button type="submit">{ buttonText }</button>
      </form>
    );
  }
}