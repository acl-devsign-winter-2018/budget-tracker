import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCategory, removeCategory } from './actions';
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
    const { id, timestamp, text, removeCategory } = this.props;
    const { editing } = this.state;

    return (
      <li>
        {editing ? 
          <CategoryForm id={id} text={text} onEdit={this.handleEdit}/> :
          <p><time>{timestamp.toLocaleString()}</time> - {text}</p>
        }
        <button onClick={this.handleToggleEdit}>
          {editing ? 'cancel' : '✎'}
        </button>
        <button onClick={() => removeCategory(id)}>X</button>
      </li>
    );
  }
}

export default connect(
  null,
  { updateCategory, removeCategory }
)(Category);

