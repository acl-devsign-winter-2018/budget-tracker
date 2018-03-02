import React, { Component } from 'react';


export default class CategoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      subCategory: '',
      budget: '',
      ...props
    };
  }



  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      ...this.state
    });
  };


  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };


  render() {
    const { id, category, budget } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>{id ? 'Edit a Category' : 'Add a Category'}</legend>
          <p> Main Category:
          <input required name="category" value={category} onChange={this.handleChange}/>
          </p>

          <input required name="budget" value={budget} onChange={this.handleChange}/>

        </fieldset>
        <button type="submit">{ id ? 'Update' : 'Add' }</button>

      </form>
    );
  }
}