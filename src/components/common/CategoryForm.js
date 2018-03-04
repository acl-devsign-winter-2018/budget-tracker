import React, { Component } from 'react';
import '../budget/Category.css';

export default class CategoryForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      ...props
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });
    this.setState({ text: '' });
    // console.log(this.state);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, text } = this.state;
    return (
      <div>
        <form onSubmit = {this.handleSubmit} className="add-category">
          <label htmlFor="category">
            <input required id="category" name="text" value={text} onChange={this.handleChange} placeholder="ex: Text"/>
          </label>
          <button type="submit">{ id ? 'Update Category' : 'Add' }</button>
        </form>
      </div>
    );
  }
}