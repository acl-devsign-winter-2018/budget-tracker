import React, { Component } from 'react';
import './styles/categoryForm.css';

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

    this.setState({ name: '', budget: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, name, budget } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <input 
              name="name" 
              placeholder={ name ? { name } : 'Name' } 
              value={name} 
              onChange={this.handleChange}/>
          </label>
          <label htmlFor="budget">
            <input 
              name="budget" 
              placeholder={ budget ? { budget } : 'Budget' } 
              value={budget} 
              onChange={this.handleChange}/>
          </label>
          <button type="submit">{ id ? 'Update' : 'Add' }</button>
        </form>
      </div>
    );
  }
}
