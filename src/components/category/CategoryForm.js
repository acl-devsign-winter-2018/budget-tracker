import React, { Component } from 'react';

export default class CategoryForm extends Component {
  
  constructor(props) {
    super(props); //accepts props and turns into state

    this.state = {
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
      subCategory: '',
      budget: '', 
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, category, subCategory, budget } = this.state;
    const { buttonText } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend className="clip">{id ? 'Edit a Category' : 'Add a Category'}</legend>

          <label htmlFor="category"> Main Category:
          <input required name="category" value={category} onChange={this.handleChange}/>
          </label>

          <label htmlFor="subCategory"> Sub Category:
          <input required name="subCategory" value={subCategory} onChange={this.handleChange}/>
          </label>

          <label htmlFor="budget"> Budget:
          <input required name="budget" value={budget} onChange={this.handleChange}/>
          </label>
        </fieldset>
        <button type="submit">{ buttonText }</button>
      </form>
    );
  }
}