import React, { Component } from 'react';

export default class CategoryForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
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
              placeholder="category" 
              value={name} 
              onChange={this.handleChange}/>
          </label>
          <label htmlFor="budget">
            <input 
              name="budget" 
              placeholder="budget" 
              value={budget} 
              onChange={this.handleChange}/>
          </label>
          <button type="submit">{ id ? 'Update' : 'Add' }</button>
        </form>
      </div>
    );
  }
}
