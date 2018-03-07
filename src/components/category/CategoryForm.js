import React, { Component } from 'react';
import './categoryForm.css';

export default class CategoryForm extends Component {
  
  constructor(props) {
    super(props); //accepts props and turns into state

    this.state = {
      category: '',
      budget: '',
      categoryPlaceholder: '',
      budgetPlaceholder: '',

      ...props.categoryObj //spreads props into state
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      ...this.state
    });

    this.setState({ 
      category: '',
      budget: '', 
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, category, budget } = this.state;
    const { buttonText, categoryPlaceholder, budgetPlaceholder } = this.props;
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend className="clip">{id ? 'Edit a Category' : 'Add a Category'}</legend>

          <label htmlFor="category"> Category:
          <input required name="category" value={category} placeholder={categoryPlaceholder} onChange={this.handleChange}/>
          </label>

          <label htmlFor="budget"> Budget:
          <input required name="budget" placeholder={budgetPlaceholder} value={budget} onChange={this.handleChange}/>
          </label>

        </fieldset>
        <button type="submit">{ buttonText }</button>
      </form>
    );
  }
}