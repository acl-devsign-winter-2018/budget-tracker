import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCategory, removeCategory } from './categoryActions';
import CategoryForm from './CategoryForm';

class Category extends Component {

  state = {
    editing: false
  };

  handleEdit = category => {
    this.props.updateCategory(category);
    this.setState({ editing: false });;
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  render() {
    const { id, timestamp, category, budget, removeCategory } = this.props;
    const { editing } = this.state;

    return (
      <li>
        {editing ? 
          <CategoryForm id={id} category={category} budget={budget} onComplete={this.handleEdit}/> 
          : 
          <div>
            <h2>Category: {category}</h2>
            <h4>Budget: {budget}</h4>
            <time>Created: {timestamp.toLocaleString()}</time>
          </div>
        }
        <button onClick={this.handleToggleEdit}>
          {editing ? 'cancel' : 'edit me!'}
        </button>
        <button onClick={() => removeCategory(id)}>delete</button>
      </li>
    );
  }
}

export default connect( 
  null,
  { updateCategory, removeCategory }
)(Category); 
