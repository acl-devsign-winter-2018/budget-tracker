import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCategory, removeCategory } from '../actions/categoryActions';
import CategoryForm from './CategoryForm';
import './categoryItem.css';

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
    const { id, timestamp, category, budget } = categoryObj;
    const { editing } = this.state;

    return (
      <li className="category-item-holder">
        {editing ? 
          <CategoryForm buttonText={'Update'} categoryObj={categoryObj} onComplete={this.handleEdit}/> :
          <div className="category-item">
            <h2>{category}</h2>
            <h4>${budget}</h4>
          </div>
        }
        <div className="item-buttons">
          <button onClick={this.handleToggleEdit}>
            {editing ? 'Cancel' : '✎'}
          </button>
          <button onClick={() => removeCategory(id)}>Delete</button>
        </div>
      </li>
    );
  }
}

export default connect( //connecting with store
  null,
  { updateCategory, removeCategory }
)(Category);