import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCat, removeCat } from './actions';
import CategoryForm from './CategoryForm';
import Expenses from '../expenses/Expenses';

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
    const { id, timestamp, name, budget, removeCat } = this.props;
    const { editing } = this.state;

    return (
      <li>
        {editing ? 
          <CategoryForm id={id} text={name} onEdit={this.handleEdit}/> :
          <div className="category">
            <h2>{name}</h2>
            <p>{budget}</p>
            <time>{timestamp.toLocaleString()}</time>
          </div>
        }
        <button onClick={this.handleToggleEdit}>
          {editing ? 'cancel' : 'edit'}
        </button>
        <button onClick={() => removeCat(id)}>X</button>
        <Expenses catId={id}/>
      </li>
    );
  }
}

export default connect(
  null,
  { updateCat, removeCat }
)(Category);