import React, { Component } from 'react';

export default class CategoryForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: '',
      ...props
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });

    this.setState({ name: '', price: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, name, price } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <input 
              name="name" 
              placeholder={ name ? { name } : 'Expense' } 
              value={name} 
              onChange={this.handleChange}/>
          </label>
          <label htmlFor="price">
            <input 
              name="price" 
              placeholder={ price ? { price } : 'Amount' } 
              value={price} 
              onChange={this.handleChange}/>
          </label>
          <button type="submit">{ 'Add' }</button>
        </form>
      </div>
    );
  }
}
