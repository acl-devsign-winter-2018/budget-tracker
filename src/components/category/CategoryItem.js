import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCategory, removeCategory } from '../actions/categoryActions';
import CategoryForm from './CategoryForm';

class Category extends Component {

  state = {
    editing: false
  };

  handleEdit = category => {
    this.props.updateCategory(category);
    this.setState({ editing: false });
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  render() {
    const { categoryObj, removeCategory } = this.props;
    const { id, timestamp, category, subCategory, budget } = categoryObj;
    const { editing } = this.state;

    return (
      <li>
        {editing ? 
          <CategoryForm buttonText={'Update'} categoryObj={categoryObj} onComplete={this.handleEdit}/> :
          <div className="category-item">
            <h2>Category: {category}</h2>
            <h3>Sub Category: {subCategory}</h3>
            <h4>Budget: {budget}</h4>
            <time>Created: {timestamp.toLocaleString()}</time>
          </div>
        }
        <button onClick={this.handleToggleEdit}>
          {editing ? 'cancel' : '✎'}
        </button>
        <button onClick={() => removeCategory(id)}>delete</button>
      </li>
    );
  }
}

export default connect( //connecting with store
  null,
  { updateCategory, removeCategory }
)(Category);