import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCat, removeCat } from './actions';
import CategoryForm from './CategoryForm';
import Expenses from '../expenses/Expenses';
import './styles/category.css';

const dateFormat = require('dateformat');

class Category extends Component {

  state = {
    editing: false
  };

  handleEdit = cat => {
    this.props.updateCat(cat);
    this.setState({ editing: false });
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  render() {
    const { id, name, budget, removeCat } = this.props;
    const { editing } = this.state;
    const timestamp = new Date(this.props.timestamp);
    const date = dateFormat(timestamp, 'dddd, mmmm dS, yyyy');

    return (
      <li>
        {editing ? 
          <CategoryForm id={id} name={name} budget={budget} onEdit={this.handleEdit}/> :
          <div className="category">
            <h2>{name}</h2>
            <p>{budget}</p>
            <time>{date}</time>
          </div>
        }

        <div className="editCat">
          <button onClick={this.handleToggleEdit}>
            {editing ? 'Cancel' : 'Edit'}
          </button>
          <button onClick={() => removeCat(id)}>Remove</button>
        </div>

        <Expenses categoryId={id}/>
      </li>
    );
  }
}

export default connect(
  null,
  { updateCat, removeCat }
)(Category);